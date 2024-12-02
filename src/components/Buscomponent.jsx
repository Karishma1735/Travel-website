import React, { useState } from 'react';
import { IoSwapHorizontalSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import busimg from './busimg.jpg'

function Buscomponent() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  // Swap function
  const swapdestination = () => {
    setDeparture((prevDeparture) => {
      const temp = prevDeparture;
      setDestination(temp);
      return destination;
    });
  };

  // PDF Generation Function
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Bus Ticket Details", 20, 20);

    // Add content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Departure: ${departure}`, 20, 40);
    doc.text(`Destination: ${destination}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);

    // Save the PDF
    doc.save("BusTicket.pdf");
  };

  return (
    <div className="bg-gray-100 h-screen">
      {/* Header Section */}
      <div className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold font-serif">KR Travels</div>
          <span className="text-sm font-light">AC Bus</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600" onClick={generatePDF}>
            Generate PDF
          </button>
          <button className="text-sm font-medium bg-green-500 px-4 py-2 rounded-md hover:bg-green-400">
            Login
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-r py-12 px-8 w-full h-full shadow-lg"
      style={{
        backgroundImage: `url(${busimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Book Electric AC Bus Tickets Online
          </h1>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Departure Input */}
            <div className="flex-1">
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Enter Departure"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Swap Button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
              onClick={swapdestination}
            >
              <IoSwapHorizontalSharp />
            </button>

            {/* Destination Input */}
            <div className="flex-1">
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter Destination"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Button */}
          <div className="mt-6 text-center">
            <button className="bg-green-500 text-white px-8 py-2 rounded-md text-lg hover:bg-green-400">
              Search Buses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buscomponent;
