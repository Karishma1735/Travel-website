import React from 'react'
import trainimg from './trainimg.jpg'

function Traincomponent() {
  return (
    <div className="bg-gradient-to-r  min-h-screen flex items-start justify-start"
    style={{
        backgroundImage: `url(${trainimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center" 
    }}>
      <div className="container  bg-white rounded-3xl shadow-xl p-8 flex gap-12 w-1/2  mt-12 mb-12 h-fit mx-9 opacity-70">
        <div className="w-1/2 space-y-4">  m 
          <h1 className="text-4xl font-extrabold text-center text-gray-800">Book Your Train Ticket</h1>
          <div className="mb-2">
            <label htmlFor="from" className="block text-gray-700 font-medium mb-1">
              From
            </label>
            <input
              type="text"
              id="from"
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-gray-700 font-medium mb-1">
              To
            </label>
            <input
              type="text"
              id="to"
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="class" className="block text-gray-700 font-medium mb-2">
              Class
            </label>
            <select
              id="class"
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            Book Ticket
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow-xl p-6 space-y-6">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            Check Vacancy
          </button>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800">Available Trains</p>
            {/* Placeholder for train list */}
            <div className="mt-4 text-gray-600">No trains available at the moment.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traincomponent;
