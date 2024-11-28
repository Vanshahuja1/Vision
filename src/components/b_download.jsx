import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const B_Download = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const { customerName, bmi, mealsPerDay, dietMacros } = state || {};

  const handleDownload = () => {
    const receiptContent = document.getElementById("receipt-content");

    html2canvas(receiptContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        10,
        10,
        imgWidth,
        imgHeight > pageHeight ? pageHeight - 20 : imgHeight
      );

      const pdfName = customerName ? `${customerName}_details.pdf` : "details.pdf";
      pdf.save(pdfName);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">Your Details</h1>
      {state ? (
        <div
          id="receipt-content"
          className="bg-white p-8 rounded shadow-lg w-full max-w-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Name: {customerName}</h2>
          <p className="mb-2">BMI: {bmi}</p>
          <p className="mb-2">Meals Per Day: {mealsPerDay}</p>
          <p className="mb-2">Diet Macros:</p>
          <ul className="list-disc ml-6">
            {dietMacros.map((macro, index) => (
              <li key={index}>
                {macro.macro}: {macro.value} cal
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No details available. Please go back and fill the form.</p>
      )}

<p className="text-lg text-gray-800 mt-4">
  Share with us from this link:{" "}
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSe7uA1lxrxbCKMGrd1DRfkWzXxQYxjUI2ajMjLdiQ61k4ffOQ/viewform?usp=sf_link"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline font-semibold"
  >
    Google Form Link
  </a>
</p>

      <button
        onClick={handleDownload}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Download as PDF
      </button>

    </div>
  );
};

export default B_Download;
