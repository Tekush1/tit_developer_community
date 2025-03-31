import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MentorsPage } from './pages/MentorsPage';
import { EventsPage } from './pages/EventsPage';
import { HallOfFamePage } from './pages/HallOfFamePage';
import { JoinPage } from './pages/JoinPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-300">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/hall-of-fame" element={<HallOfFamePage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;