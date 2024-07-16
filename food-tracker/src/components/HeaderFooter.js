import React from 'react';

const HeaderFooter = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Meine Webseite</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Meine Webseite. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default HeaderFooter;
