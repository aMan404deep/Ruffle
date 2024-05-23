import React, { useState } from 'react';
import { LuMailOpen } from 'react-icons/lu';
import Modal from '../components/Modal'; // Import the Modal component

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubscribe = () => {
    setModalMessage(`You have subscribed to the newsletter with the email: ${email}`);
    setShowModal(true);
    setEmail(''); // Clear the email input
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Sign up to Our Newsletter
            </h3>
            <p>...and receive a 500/- coupon for first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full rounded-full focus:text-black"
            type="email"
            placeholder="Your Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent"
            onClick={handleSubscribe}
          >
            Subscribe!
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <Modal show={showModal} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default NewsLetter;
