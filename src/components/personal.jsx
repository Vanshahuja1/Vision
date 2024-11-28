import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      mealsImproved: e.target.mealsImproved.value,
      feedback: e.target.feedback.value,
    };

    navigate('/a_download', { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Welcome to Your Assessment</h1>
        <p className="text-gray-700 mb-8 text-center">
          Help us understand your nutrition and dietary habits. Your feedback is valuable for improving dietary practices!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              required
            />
          </div>
          {/* Meals Improved Dropdown */}
          <div>
            <label htmlFor="mealsImproved" className="block text-gray-700 font-medium mb-2">
              Have you improved your meals? (Yes/No)
            </label>
            <select
              id="mealsImproved"
              name="mealsImproved"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* Feedback Input */}
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Personal;
