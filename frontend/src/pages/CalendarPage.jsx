import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black text-off-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="h-20 bg-gray-900 text-center flex items-center justify-center rounded-2xl shadow-md hover:bg-gray-800"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-8 right-8 bg-gold hover:bg-gold-hover text-black font-bold p-4 rounded-full shadow-lg"
        aria-label="Add Session"
        onClick={openModal}
      >
        +
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Session</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2">Title</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-gray-800 text-off-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Description</label>
                <textarea
                  className="w-full p-2 rounded-lg bg-gray-800 text-off-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Duration (minutes)</label>
                <input
                  type="number"
                  className="w-full p-2 rounded-lg bg-gray-800 text-off-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Tags</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-gray-800 text-off-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Comma-separated tags"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gold hover:bg-gold-hover text-black font-bold py-2 px-4 rounded-lg"
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
