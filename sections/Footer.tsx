import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // Hide in Mobile
    <footer className="py-4 text-center text-gray-500 md:block md:py-6">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/johncanero/"
      >
      <span className="mr-2 text-lg font-bold text-gray-900 dark:text-cyan-400">
        John Cañero
      </span>
      </Link>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
