import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicBackground from './components/DynamicBackground';
import MainPortfolio from './pages/MainPortfolio';
import ProjectSkillGraph from './pages/ProjectSkillGraph';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden relative transition-colors duration-500">
        <DynamicBackground />
        <CommandPalette />
        <div className="grid-pattern relative z-10">
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/project/skillgraph" element={<ProjectSkillGraph />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
