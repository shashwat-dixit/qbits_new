import React from 'react';
import Image from 'next/image';

const Card = ({ imageSrc, name, designation, linkedinUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-2 bg-white hover:bg-gray-100 transition duration-300">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={300}
          className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition duration-300"></div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{designation}</p>
      </div>
      {linkedinUrl && (
        <div className="px-6 py-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
