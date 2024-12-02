import React from 'react'

function Traincomponent() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-8 flex gap-8">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-6">Book Ticket</h1>
          <div className="mb-4">
            <label htmlFor="from" className="block text-gray-700 font-medium mb-2">
              From
            </label>
            <input
              type="text"
              id="from"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-gray-700 font-medium mb-2">
              To
            </label>
            <input
              type="text"
              id="to"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="class" className="block text-gray-700 font-medium mb-2">
              Class
            </label>
            <select
              id="class"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline- none focus:shadow-outline"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Ticket
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
            Charts Vacancy
          </button>
          <div className="text-center">
            <p className="text-lg font-semibold">Available Trains</p>
            {/* Placeholder for train list */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traincomponent ;