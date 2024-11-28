import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Business = () => {
  const [name, setName] = useState("");
  const [bmi, setBmi] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState(3);
  const [dietMacros, setDietMacros] = useState([{ macro: "", value: "" }]);
  const navigate = useNavigate();

  const handleMacroChange = (index, key, value) => {
    const newMacros = [...dietMacros];
    newMacros[index][key] = value;
    setDietMacros(newMacros);
  };

  const handleSubmit = () => {
    const formData = {
      customerName: name,
      bmi,
      mealsPerDay,
      dietMacros,
    };
    navigate("/w_download", { state: formData });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-gray-100 p-6">
      {/* Page Description */}
      <div className="text-center max-w-3xl mb-8">
        <h1 className="text-5xl font-bold mb-4">Health & Nutrition Workshop</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our workshop designed to help individuals understand the
          importance of nutrition in their daily lives. Proper nutrition is the
          foundation of a healthy body and mind. It supports growth, strengthens
          the immune system, and improves overall well-being.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Fill Out Your Details
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="Enter your name"
          />
        </div>

        {/* BMI Input */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Your BMI:</label>
          <input
            type="text"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="e.g., 24.5"
          />
          <p className="text-sm text-blue-600 mt-1">
            Need help calculating your BMI?{" "}
            <a
              href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Use our BMI Calculator
            </a>.
          </p>
        </div>

        {/* Meals Per Day Input */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            How many meals do you eat daily?
          </label>
          <input
            type="number"
            min="1"
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        {/* Diet Macros Input */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Enter Your Diet Macros:
          </label>
          {dietMacros.map((macro, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={macro.macro}
                onChange={(e) =>
                  handleMacroChange(index, "macro", e.target.value)
                }
                placeholder="Food Item "
                className="border rounded w-full py-2 px-3 mb-2"
              />
              <input
                type="number"
                value={macro.value}
                onChange={(e) =>
                  handleMacroChange(index, "value", e.target.value)
                }
                placeholder="Calories  "
                className="border rounded w-full py-2 px-3"
              />
            </div>
          ))}
          <button
            onClick={() =>
              setDietMacros([...dietMacros, { macro: "", value: "" }])
            }
            className="text-blue-500 mt-2"
          >
            + Add Another Macro
          </button>
          <p className="text-sm text-blue-600 mt-1">
            Need help calculating your macros?{" "}
            <a
              href="https://www.calculator.net/macro-calculator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Use our Macro Calculator
            </a>.
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Submit and Download Plan
        </button>
      </div>

      {/* Link to Meals */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Explore Our Meal Suggestions</h3>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          Looking for affordable and healthy meal ideas? We offer meal plans
          packed with essential nutrients to meet your dietary goals and fit
          your budget.
        </p>
        <button
          onClick={() => navigate("/diet")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Go to Meals
        </button>
      </div>
    </div>
  );
};

export default Business;
