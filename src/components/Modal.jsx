// Modal.js
import React from 'react';

const Modal = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Subscription Status</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
