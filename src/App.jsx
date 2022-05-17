import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/Main";
import HomePage from "./pages/Home";
import MembersPage from "./pages/Members";
import ArticlesPage from "./pages/Publication/Articles";
import MostDownloadedPage from "./pages/Publication/Downloaded";
import JournalsPage from "./pages/Publication/Journals";
import ConferencesPage from "./pages/Publication/Conferences";
import BooksChapterPage from "./pages/Publication/Books";
import BooksPage from "./pages/Books";
import PatentsPage from "./pages/Patents";
import ProjectsPage from "./pages/Projects";
import ResearchPage from "./pages/Research";
import ProfessionalPage from "./pages/Professional";

import AwardAndRecogPage from "./pages/Awards/AwardAndRecog";
import TravelGrandsPage from "./pages/Awards/TravelGrands";
import BestPaperPage from "./pages/Awards/BestPaper";

import CollabarationPage from "./pages/Collaboration";
import GalleryPage from "./pages/Gallery";
import ContactsPage from "./pages/Contacts";

const App = () => {
  return (
    <MainLayout>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/publications/articles" element={<ArticlesPage />} />
          <Route
            path="/publications/downloaded"
            element={<MostDownloadedPage />}
          />
          <Route path="/publications/journals" element={<JournalsPage />} />
          <Route
            path="/publications/conferences"
            element={<ConferencesPage />}
          />
          <Route
            path="/publications/book-chapters"
            element={<BooksChapterPage />}
          />
          <Route path="/patents" element={<PatentsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />

          <Route path="/awards/award" element={<AwardAndRecogPage />} />
          <Route path="/awards/grants" element={<TravelGrandsPage />} />
          <Route path="/awards/best" element={<BestPaperPage />} />

          <Route path="/collaborations" element={<CollabarationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

export default App;
