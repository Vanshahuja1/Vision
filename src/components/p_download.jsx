import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Register all necessary components
Chart.register(...registerables);

const P_Download = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (!state) {
    return <div>No data available</div>;
  }

  const { name, email, mealsImproved, feedback } = state;

  const handleDownload = () => {
    const receiptContent = document.getElementById('printable-receipt');

    html2canvas(receiptContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight > pageHeight ? pageHeight - 20 : imgHeight);
      pdf.save(`${name}_assessment.pdf`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8">Assessment Summary</h1>
      <div id="printable-receipt" className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Assessment Details</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Meals Improved:</strong> {mealsImproved}</p>
        <p><strong>Feedback:</strong> {feedback}</p>
      </div>
      <button
        onClick={handleDownload}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Download Summary as PDF
      </button>

      <button
        onClick={() => navigate('/assessment')}
        className="mt-4 text-blue-500 hover:underline"
      >
        Back to Assessment Form
      </button>

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
    </div>
  );
};

export default P_Download;
