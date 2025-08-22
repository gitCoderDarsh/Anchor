import React from 'react';

function StatsPage() {
  return (
    <div className="bg-black text-off-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Stats</h1>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Time Spent Per Tag</h2>
        <div className="flex items-end space-x-4">
          {['Work', 'Exercise', 'Study'].map((tag, index) => (
            <div key={index} className="text-center">
              <div
                className="bg-gold hover:bg-gold-hover w-12 rounded-t-2xl"
                style={{ height: `${(index + 1) * 50}px` }}
              ></div>
              <span className="text-sm mt-2 block">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
