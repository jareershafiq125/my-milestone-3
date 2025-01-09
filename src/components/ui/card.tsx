import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* Card Button */}
        <a
          href={link}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
