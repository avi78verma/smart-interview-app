import { Interview } from "../types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { CustomBreadCrumb } from "../components/custom-bread-crumb";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Lightbulb } from "lucide-react";
import { QuestionSection } from "../components/question-section";

export const MockInterviewPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  // 1. isLoading ko default 'true' karein taaki data fetch hote hi loader dikhe
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Data fetching ke liye useEffect
  useEffect(() => {
    const fetchInterview = async () => {
      // Shuru mein hi check karein ki interviewId hai ya nahi
      if (!interviewId) {
        console.log("No interviewId found, redirecting...");
        navigate("/generate", { replace: true });
        return; // Fetch karne ki zaroorat nahi
      }

      setIsLoading(true); // Loading shuru karein
      try {
        const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
        if (interviewDoc.exists()) {
          setInterview({
            id: interviewDoc.id,
            ...interviewDoc.data(),
          } as Interview);
        } else {
          // Agar interviewId galat hai aur document nahi mila
          console.log("Interview document not found, redirecting...");
          navigate("/generate", { replace: true });
        }
      } catch (error) {
        console.log("Error fetching interview:", error);
        navigate("/generate", { replace: true }); // Error par bhi redirect karein
      } finally {
        setIsLoading(false); // Loading khatam karein
      }
    };

    fetchInterview();
  }, [interviewId, navigate]); // Dependencies mein sirf interviewId aur navigate rakhein

  // Jab loading chal rahi ho, Loader dikhayein
  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  // Loading poori hone ke baad, agar interview null hai (redirect pehle hi ho chuka hoga, but safe check)
  if (!interview) {
    // Yahan loader dikhana behtar hai ya null return karna,
    // kyunki useEffect pehle hi redirect handle kar lega.
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  // Ab humein pata hai ki interview hai, toh UI render karein
  return (
    <div className="flex flex-col w-full gap-8 py-5">
      <CustomBreadCrumb
        breadCrumbPage="Start"
        breadCrumpItems={[
          { label: "Mock Interviews", link: "/generate" },
          {
            label: interview.position || "", // Ab 'interview' null nahi ho sakta
            link: `/generate/interview/${interview.id}`,
          },
        ]}
      />

      <div className="w-full">
        <Alert className="bg-sky-100 border border-sky-200 p-4 rounded-lg flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-sky-600" />
          <div>
            <AlertTitle className="text-sky-800 font-semibold">
              Important Note
            </AlertTitle>
            <AlertDescription className="text-sm text-sky-700 mt-1 leading-relaxed">
              Press "Record Answer" to begin answering the question. Once you
              finish the interview, you&apos;ll receive feedback comparing your
              responses with the ideal answers.
              <br />
              <br />
              <strong>Note:</strong>{" "}
              <span className="font-medium">Your video is never recorded.</span>{" "}
              You can disable the webcam anytime if preferred.
            </AlertDescription>
          </div>
        </Alert>
      </div>

      {/* Yahan bhi check safe hai */}
      {interview.questions && interview.questions.length > 0 && (
        <div className="mt-4 w-full flex flex-col items-start gap-4">
          <QuestionSection questions={interview.questions} />
        </div>
      )}
    </div>
  );
};