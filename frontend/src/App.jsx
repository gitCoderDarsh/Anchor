import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold">Timeout</div>
          <nav className="flex-1">
            <ul>
              <li><Link to="/" className="block p-4 hover:bg-gray-700">Calendar</Link></li>
              <li><Link to="/stats" className="block p-4 hover:bg-gray-700">Stats</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
