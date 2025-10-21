import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Relative paths for CRA
import { PublicLayout } from "./layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";

import HomePage from "./routes/home";
import { ContactPage } from "./routes/ContactPage";     // Aapka page
import { AboutPage } from "./routes/AboutPage";       // Aapka page
import { ServicesPage } from "./routes/ServicesPage";   // Aapka page
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import { ComingSoonPage } from "./routes/coming-soon"; // Utility page
import { NotFoundPage } from "./routes/not-found";   // Utility page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* --- Public Routes Start --- */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* Service detail pages jo footer se link hain */}
          <Route path="/services/interview-prep" element={<ComingSoonPage />} />
          <Route path="/services/career-coaching" element={<ComingSoonPage />} />
          <Route path="/services/resume-building" element={<ComingSoonPage />} />
          
          {/* 404 Page - Yeh hamesha Public Routes mein sabse neeche hona chahiye */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* --- Public Routes End --- */}

        {/* --- Authentication Routes --- */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* --- Protected Routes Start (Correct Structure) --- */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          <Route path="/generate" element={<Generate />}>
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
          {/* Yahan aur protected routes add kar sakte hain */}
        </Route>
        {/* --- Protected Routes End --- */}

      </Routes>
    </Router>
  );
};

export default App;