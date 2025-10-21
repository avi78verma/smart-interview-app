import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import { Button } from "../components/ui/button";
import { MarqueImg } from "../components/marquee-img";
const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <div
        className="w-auto relative py-20 md:py-32 flex items-center justify-center text-center 
                   mx-4 mt-4 rounded-xl overflow-hidden  
                   bg-cover bg-center" 
        style={{
          backgroundImage: `url('/assets/img/tch.jpg')`, // Background for the header text
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <Container className="relative z-10">
          <div className="my-8">
            <h2 className="text-3xl text-center md:text-left md:text-6xl text-white">
              <span className=" text-outline font-extrabold md:text-8xl">
                Smart Interview Simulator
              </span>
              <span className="text-gray-300 font-extrabold">
                - Ace Your Next Interview.
              </span>
              <br />
              Practice with our AI interviewer.
            </h2>
            <p className="mt-4 text-gray-200 text-sm">
              Get personalized tips and detailed feedback to master your skills and
              land your dream job.
            </p>
          </div>
        </Container>
      </div>
            <Container>
        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12 mt-8">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/heross.jpg" 
            alt="smt"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>
          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Start Your Practice</h2>
            <p className="text-sm text-neutral-500">
              Click 'Generate' to start a new mock interview. Our AI will ask questions tailored just for you.
            </p>
            <Link to={"/generate"} >
              <Button className="mt-3">
                Generate <Sparkles />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Ready to See What an Interviewer *Really* Hears?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Build confidence with every session. Our AI provides a **safe, private space** to practice without pressure. Get personalized feedback, improve your answers, and be ready for any question they throw at you. 📈
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;