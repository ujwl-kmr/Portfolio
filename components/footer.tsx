import React from "react";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Ujjawal. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email,
        Resend and Vercel hosting.
      </p>
    </footer>
  );
}