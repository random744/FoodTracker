import React from 'react';
import 'tailwindcss/tailwind.css';

const HeaderFooter = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4 fixed top-0 left-0 right-0 shadow-md z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Meine Webseite</h1>
        </div>
      </header>
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Meine Webseite. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;
