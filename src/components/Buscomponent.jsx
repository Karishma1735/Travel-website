import React, { useState } from "react";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import jsPDF from "jspdf";
import busimg from "./busimg.jpg";
import { useNavigate } from "react-router-dom";

function Buscomponent() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [departureSuggestions,setDepartureSuggestions] = useState('')
  const [destinationSuggestions,setDestinationSuggestions] = useState("")

  const navigate = useNavigate()

  const busData = [
    { id: 1, departure: "Mumbai", destination: "Indore", date: "2024-12-05", time: "10:00 AM", price: "$20"     },
    { id: 2, departure: "Indore", destination: "Mumbai", date: "2024-12-05", time: "1:00 PM", price: "$25" },
    { id: 3, departure: "Indore", destination: "Hyderabad", date: "2024-12-06", time: "3:00 PM", price: "$18" },
    { id: 4, departure: "Hyderabad", destination: "Indore", date: "2024-12-07", time: "9:00 AM", price: "$22" },
    { id: 5, departure: "Delhi", destination: "Jaipur", date: "2024-12-08", time: "8:00 AM", price: "$15" },
    { id: 6, departure: "Jaipur", destination: "Delhi", date: "2024-12-08", time: "4:00 PM", price: "$17" },
    { id: 7, departure: "Bangalore", destination: "Chennai", date: "2024-12-09", time: "7:30 AM", price: "$19" },
    { id: 8, departure: "Chennai", destination: "Bangalore", date: "2024-12-09", time: "6:00 PM", price: "$20" },
    { id: 9, departure: "Pune", destination: "Goa", date: "2024-12-10", time: "5:00 AM", price: "$22" },
    { id: 10, departure: "Goa", destination: "Pune", date: "2024-12-10", time: "7:00 PM", price: "$25" },
    { id: 11, departure: "Kolkata", destination: "Ranchi", date: "2024-12-11", time: "10:00 AM", price: "$18" },
    { id: 12, departure: "Ranchi", destination: "Kolkata", date: "2024-12-11", time: "5:00 PM", price: "$20" },
    { id: 13, departure: "Lucknow", destination: "Agra", date: "2024-12-12", time: "9:00 AM", price: "$12" },
    { id: 14, departure: "Agra", destination: "Lucknow", date: "2024-12-12", time: "6:00 PM", price: "$14" },
    { id: 15, departure: "Ahmedabad", destination: "Surat", date: "2024-12-13", time: "8:00 AM", price: "$10" },
    { id: 16, departure: "Surat", destination: "Ahmedabad", date: "2024-12-13", time: "4:00 PM", price: "$12" },
    { id: 17, departure: "Mumbai", destination: "Pune", date: "2024-12-14", time: "6:00 AM", price: "$8" },
    { id: 18, departure: "Pune", destination: "Mumbai", date: "2024-12-14", time: "6:00 PM", price: "$8" },
    { id: 19, departure: "Bangalore", destination: "Hyderabad", date: "2024-12-15", time: "5:00 AM", price: "$15" },
    { id: 20, departure: "Hyderabad", destination: "Bangalore", date: "2024-12-15", time: "4:00 PM", price: "$15" },
    { id: 21, departure: "Kochi", destination: "Thiruvananthapuram", date: "2024-12-16", time: "9:00 AM", price: "$10" },
    { id: 22, departure: "Thiruvananthapuram", destination: "Kochi", date: "2024-12-16", time: "5:00 PM", price: "$10" },
    { id: 23, departure: "Nagpur", destination: "Bhopal", date: "2024-12-17", time: "8:00 AM", price: "$18" },
    { id: 24, departure: "Bhopal", destination: "Nagpur", date: "2024-12-17", time: "3:00 PM", price: "$18" },
    { id: 25, departure: "Chandigarh", destination: "Shimla", date: "2024-12-18", time: "7:00 AM", price: "$12" },
    { id: 26, departure: "Shimla", destination: "Chandigarh", date: "2024-12-18", time: "2:00 PM", price: "$12" },
    { id: 27, departure: "Varanasi", destination: "Patna", date: "2024-12-19", time: "10:00 AM", price: "$10" },
    { id: 28, departure: "Patna", destination: "Varanasi", date: "2024-12-19", time: "6:00 PM", price: "$10" },
    { id: 29, departure: "Guwahati", destination: "Shillong", date: "2024-12-20", time: "8:00 AM", price: "$8" },
    { id: 30, departure: "Shillong", destination: "Guwahati", date: "2024-12-20", time: "5:00 PM", price: "$8" },
    { id: 31, departure: "Indore", destination: "Udaipur", date: "2024-12-21", time: "9:00 AM", price: "$15" },
    { id: 32, departure: "Udaipur", destination: "Indore", date: "2024-12-21", time: "6:00 PM", price: "$15" },
    { id: 33, departure: "Jaipur", destination: "Jodhpur", date: "2024-12-22", time: "7:00 AM", price: "$18" },
    { id: 34, departure: "Jodhpur", destination: "Jaipur", date: "2024-12-22", time: "4:00 PM", price: "$18" },
    { id: 35, departure: "Mumbai", destination: "Surat", date: "2024-12-23", time: "6:00 AM", price: "$12" },
    { id: 36, departure: "Surat", destination: "Mumbai", date: "2024-12-23", time: "4:00 PM", price: "$12" },
    { id: 37, departure: "Delhi", destination: "Chandigarh", date: "2024-12-24", time: "6:00 AM", price: "$10" },
    { id: 38, departure: "Chandigarh", destination: "Delhi", date: "2024-12-24", time: "4:00 PM", price: "$10" },
    { id: 39, departure: "Bangalore", destination: "Mysore", date: "2024-12-25", time: "7:00 AM", price: "$8" },
    { id: 40, departure: "Mysore", destination: "Bangalore", date: "2024-12-25", time: "5:00 PM", price: "$8" },
    { id: 41, departure: "Ahmedabad", destination: "Vadodara", date: "2024-12-26", time: "7:30 AM", price: "$7" },
    { id: 42, departure: "Vadodara", destination: "Ahmedabad", date: "2024-12-26", time: "4:30 PM", price: "$7" },
    { id: 43, departure: "Pune", destination: "Aurangabad", date: "2024-12-27", time: "9:00 AM", price: "$10" },
    { id: 44, departure: "Aurangabad", destination: "Pune", date: "2024-12-27", time: "6:00 PM", price: "$10" },
    { id: 45, departure: "Hyderabad", destination: "Vijayawada", date: "2024-12-28", time: "8:00 AM", price: "$12" },
    { id: 46, departure: "Vijayawada", destination: "Hyderabad", date: "2024-12-28", time: "6:00 PM", price: "$12" },
    { id: 47, departure: "Kolkata", destination: "Siliguri", date: "2024-12-29", time: "7:00 AM", price: "$15" },
    { id: 48, departure: "Siliguri", destination: "Kolkata", date: "2024-12-29", time: "4:00 PM", price: "$15" },
    { id: 49, departure: "Chennai", destination: "Coimbatore", date: "2024-12-30", time: "9:00 AM", price: "$18" },
    { id: 50, departure: "Coimbatore", destination: "Chennai", date: "2024-12-30", time: "5:00 PM", price: "$18" }
];
const getCities = () => {
  const cities = new Set();
  busData.forEach((bus) => {
    cities.add(bus.departure);
    cities.add(bus.destination);
  });
  return Array.from(cities);
};

const cities = getCities();

const handleDepartureChange = (value) => {
  setDeparture(value);
  setDepartureSuggestions(
    value
      ? cities.filter(city => city.toLowerCase().startsWith(value.toLowerCase()))
      : []
  );
};

const handleDestinationChange = (value) => {
  setDestination(value);
 setDestinationSuggestions(
  value? cities.filter(city=>city.toLowerCase().startsWith(value.toLowerCase()))
  :[]
 )
};
    
const handleSuggestionClick = (city, field) => {
  if (field === "departure") {
    setDeparture(city);
    setDepartureSuggestions([]);
  } else if (field === "destination") {
    setDestination(city);
    setDestinationSuggestions([]);
  }
};

  const swapdestination = () => {
    setDeparture((prevDeparture) => {
      const temp = prevDeparture;
      setDestination(temp);
      return destination;
    });
  };

  
  const searchBuses = () => {
    const filteredBuses = busData.filter(
      (bus) =>
        bus.departure.toLowerCase() === departure.toLowerCase() &&
        bus.destination.toLowerCase() === destination.toLowerCase() &&
        bus.date === date
    );
    setResults(filteredBuses);
  };

 
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Bus Ticket Details", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Departure: ${departure}`, 20, 40);
    doc.text(`Destination: ${destination}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);

    doc.save("BusTicket.pdf");
  };

  return (
    <div className="bg-gray-100 h-screen">
      
      <div className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold font-serif">KR Travels</div>
          <span className="text-sm font-light">AC Bus</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-sm font-medium bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={generatePDF}
          >
            Generate PDF
          </button>
          <button className="text-sm font-medium bg-green-500 px-4 py-2 rounded-md hover:bg-green-400">
            Login
          </button>
        </div>
      </div>

       
      <div
        className="bg-gradient-to-r py-12 px-8 w-full h-full shadow-lg"
        style={{
          backgroundImage: `url(${busimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Book Electric AC Bus Tickets Online
          </h1>

          <div className="flex flex-wrap gap-4 items-center">
             
            <div className="flex-1">
              <input
                type="text"
                value={departure}
                onChange={(e) => handleDepartureChange(e.target.value)}
                placeholder="Enter Departure"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {departureSuggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-40 overflow-y-auto z-10">
                {departureSuggestions.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleSuggestionClick(city, "departure")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
  

            </div>

           
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
              onClick={swapdestination}
            >
              <IoSwapHorizontalSharp />
            </button>

            <div className="flex-1">
              <input
                type="text"
                value={destination}
                onChange={(e) => handleDestinationChange(e.target.value)}
                placeholder="Enter Destination"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               {destinationSuggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-40 overflow-y-auto z-10">
                {destinationSuggestions.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleSuggestionClick(city, "destination")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
            </div>

          </div>

         
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

          
          <div className="mt-6 text-center">
            <button
              className="bg-green-500 text-white px-8 py-2 rounded-md text-lg hover:bg-green-400"
              onClick={searchBuses}
            >
              Search Buses
            </button>
          </div>

         
          <div className="mt-6">
            {results.length > 0 ? (
              results.map((bus) => (
                <div
                  key={bus.id}
                  className="border border-gray-300 p-4 rounded-md mb-4"
                >
                  <p><strong>Departure:</strong> {bus.departure}</p>
                  <p><strong>Destination:</strong> {bus.destination}</p>
                  <p><strong>Date:</strong> {bus.date}</p>
                  <p><strong>Time:</strong> {bus.time}</p>
                  <p><strong>Price:</strong> {bus.price}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No buses found.</p>
            )}
          </div>
          <div className="mt-6 text-center">
  {results.length > 0 && (
    <button
      className="bg-blue-500 text-white px-8 py-2 rounded-md text-lg hover:bg-blue-400"
      onClick={()=>navigate("/travellerdetails")} 
    >
      Book Ticket
    </button>
  )}
</div>
        </div>
      </div>
    </div>
  );
}

export default Buscomponent;
