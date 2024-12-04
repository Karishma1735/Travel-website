import React from 'react';

function Travellerdetails() {
  return (
    <div className="container mx-auto px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl flex flex-col justify-center items-center w-1/2 h-full mt-11">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Traveller Details</h2>
      
      <div className="flex flex-col justify-center items-center gap-8">
      
        <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl">
          <label htmlFor="name-6b" className="block text-gray-800 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name-6b"
            className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Type here"
          />
        </div>
        
        {/* Age and Gender Input */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl">
          <label htmlFor="age-6b" className="block text-gray-800 font-medium mb-2">Age*</label>
         
          <input
            type="number"
            id="age-6b"
            max={100}
            min={0}
            className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition duration-300 ease-in-out"
            placeholder="eg: 24"
          />
          
          <div className="mt-4">
            <label className="block text-gray-800 font-medium mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="gender-6b"
                  value="male"
                />
                <span className="ml-2 text-gray-800">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-pink-600"
                  name="gender-6b"
                  value="female"
                />
                <span className="ml-2 text-gray-800">Female</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
          Submit Details
        </button>
      </div>
    </div>
  );
}

export default Travellerdetails;
