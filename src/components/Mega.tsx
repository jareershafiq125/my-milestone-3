"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date?: string; // Optional: Display post date
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, link, date }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
          priority
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Date Section */}
        {date && (
          <time dateTime={date} className="block text-xs text-gray-500">
            {new Date(date).toLocaleDateString()}
          </time>
        )}

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold text-gray-800">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Read More Link */}
        <Link href={link}>
          <a className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline">
            Read More →
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
