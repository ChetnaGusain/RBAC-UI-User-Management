import React from 'react';

const Table = ({ data, onEdit, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 border border-gray-300 text-left font-medium text-gray-700">Name</th>
          <th className="px-6 py-3 border border-gray-300 text-left font-medium text-gray-700">Email</th>
          <th className="px-6 py-3 border border-gray-300 text-left font-medium text-gray-700">Role</th>
          <th className="px-6 py-3 border border-gray-300 text-left font-medium text-gray-700">Status</th>
          <th className="px-6 py-3 border border-gray-300 text-left font-medium text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 border border-gray-300">{item.name}</td>
              <td className="px-6 py-4 border border-gray-300">{item.email}</td>
              <td className="px-6 py-4 border border-gray-300">{item.role}</td>
              <td className="px-6 py-4 border border-gray-300">{item.status}</td>
              <td className="px-6 py-4 border border-gray-300">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
