import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-black text-off-white">
        <aside className="w-64 bg-gray-900 text-off-white flex flex-col">
          <div className="p-4 text-2xl font-bold">Timeout</div>
          <nav className="flex-1">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block p-4 rounded-2xl hover:bg-gray-800 ${isActive ? 'text-gold' : ''}`
                  }
                >
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    `block p-4 rounded-2xl hover:bg-gray-800 ${isActive ? 'text-gold' : ''}`
                  }
                >
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `block p-4 rounded-2xl hover:bg-gray-800 ${isActive ? 'text-gold' : ''}`
                  }
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1">
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
