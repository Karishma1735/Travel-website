import React from 'react'
import travelImage from './travel.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { TbActivity } from "react-icons/tb";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { SiMentorcruise } from "react-icons/si";
import jsPDF from 'jspdf';

function Maincomponent() {

  // const [formData, setFormData] = useState({
  //   leavingFrom: '',
  //   destination: '',
  //   theme: '',
  //   fromDate: '',
  //   toDate: '',
  //   travelers: ''
  // });

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title and text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Travel Booking Details", 20, 20);

    // Add details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Leaving From: [Selected Leaving Location]", 20, 40);
    doc.text("Destination: [Selected Destination]", 20, 50);
    doc.text("Theme: [Selected Theme]", 20, 60);
    doc.text("From: [Start Date]", 20, 70);
    doc.text("To: [End Date]", 20, 80);
    doc.text("Travelers: [Number of Travelers]", 20, 90);

    // Save the PDF
    doc.save("TravelBookingDetails.pdf");
  };

  const navigate = useNavigate()
  return (
    <div> 
       
        <div className='h-screen p-5 flex 
         flex-col justify-center items-center border rounded-md shadow-md maincontainer'
         style={{
            backgroundImage: `url(${travelImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className='flex justify-around items-end mb-32  ml-0 mt-0 pt-0'>
  <header className="mb-12 mr-80 flex justify-between items-center w-full">
    {/* Navigation Links */}
    <div>
      <ul className="hidden md:flex space-x-8">
        <li>
          <NavLink
            to="/"
            className="text-white bold text-lg hover:text-blue-950 font-serif"
          >
            Horizon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-950 font-serif"
          >
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-950 font-serif "
          >
            Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-950 font-serif"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-950 font-serif"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-950 font-serif"
          >
            Review and Ratings
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Generate PDF Button */}
    <div className='ml-72'>
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        Generate PDF
      </button>
    </div>
  </header>
</div>


            
            <div className="text-center mt-5 mb-5">
            <p className="text-lg md:text-xl font-medium text-white tracking-widest ">
             One Adventure At A Time
               </p>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase mt-1">
                  DISCOVER
                </h1>
            </div>
           <div className='mb-4'>
           <div className="flex gap-2 mt-6">
  <button className="flex items-center justify-center px-2 py-2  font-medium rounded-md shadow text-white hover:text-gray-100 bg-blue-300 m -0">
    <span className="mr-1">
      <img src="" alt="Packages Icon" className="w-6 h-6" />
    </span>
    Packages
  </button>
  <button className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <FaHotel  className="w-4 h-4" />
    </span>
    Hotels
  </button>
  <button className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
    <FaCarAlt  className="w-5 h-5" />
    </span>
    Cabs
  </button>
  <button className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <TbActivity  className="w-5 h-5" />
    </span>
    Activities
  </button>
  <button
  onClick={()=>navigate("/traincomponent")}
  className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <FaTrainSubway  className="w-4 h-5" /> 
    </span>
    Trains
  </button>
  <button 
  onClick={()=>navigate("/buscomponent")}
  className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <FaBus  className="w-5 h-5" />
    </span>
    Buses
  </button>
  <button className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <RiFlightTakeoffLine  className="w-5 h-5" />
    </span>
    Flights
  </button>
  <button className="flex items-center justify-center px-2 py-2 bg-black opacity-55 text-white font-medium rounded-md shadow hover:bg-gray-100 mx-0">
    <span className="mr-1">
      <SiMentorcruise className="w-5 h-5" />
    </span>
    Cruise
  </button>
</div>

<div className="flex bg-blue-300 p-2 rounded-lg shadow-md m-1">

  <div className="flex flex-col items-start w-full sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-fit text-sm mx-1">
  <p className="text-gray-700 font-semibold text-sm mb-1">Leaving From</p>
  <select className="w-full p-2 text-gray-600 bg-white border-none rounded-md focus:outline-none focus:ring-2 hover:focus:ring-blue-500 px-0 py-0 ">
    <option value="" className="text-gray-400">Select leaving location</option>
  </select>
</div>

  {/* Destination */}
  <div className="flex flex-col items-start w-full sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-fit text-sm mx-1 ">
  <p className="text-gray-700 font-semibold text-sm mb-1">Destination</p>
  <select className="w-full p-2 text-gray-600 bg-white border-none rounded-md focus:outline-none focus:ring-2 hover:focus:ring-blue-500 px-0 py-0 ">
    <option value="" className="text-gray-400">Select Destination</option>
  </select>
</div>


  {/* Theme */}
  <div className="flex flex-col items-start w-full sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-fit text-sm">
  <p className="text-gray-700 font-semibold text-sm mb-1">Theme</p>
  <select className="w-full p-2 text-gray-600 bg-white border-none rounded-md focus:outline-none focus:ring-2 hover:focus:ring-blue-500 px-0 py-0 ">
    <option value="" className="text-gray-400">Solo Traveler</option>
  </select>
</div>

  {/* From */}
  <div className="flex flex-col items-start  sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-fit text-sm mb-1 mx-1">
  <p className="text-gray-700 font-semibold text-sm ">From</p>
  <input
      type="date"
      className=" p-0 border-nopne rounded-md text-gray-600 focus:outline-none focus:ring-2 hover:focus:ring-blue-500 w-fit" 
    /> 
  
</div>

  {/* To */}
  <div className="flex flex-col items-start  sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-fit text-sm mb-1 mx-1">
  <p className="text-gray-700 font-semibold text-sm ">To</p>
  <input
      type="date"
      className=" p-0 border-none rounded-md text-gray-600 focus:outline-none focus:ring-2 hover:focus:ring-blue-500 w-fit" 
    /> 
  
</div>

  <div className="flex flex-col items-start  sm:w-auto px-1 mb-1 sm:mb-0 bg-white border border-gray-300 rounded-md shadow-md h-fit w-50% text-sm mb-1 mx-1">
  <p className="text-gray-700 font-semibold text-sm ">Travelers</p>
  <input
      type="text" placeholder='number'
      className=" p-0 border-none rounded-md text-gray-600 focus:outline-none focus:ring-2 hover:focus:ring-blue-500 " 
    /> 
  
</div>
  <div className="flex items-end w-full sm:w-1/6 px-2 mt-0">
    <button className="w-full bg-blue-950 text-white font-medium py-2 px-4 rounded-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      Search
    </button>
  </div>

 
</div>
 {/* Add Flight Button */}
 <div className="flex justify-start w-full mt-2 mb-4">
    <button className="bg-gray-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
      Add a Flight
    </button>
  </div>

        
           </div>
          
        </div>
    </div>
  )
}

export default Maincomponent

