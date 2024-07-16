import React from 'react';
import HeaderFooter from './components/HeaderFooter';
import Search from './components/Search';

const App = () => {
  return (
    <HeaderFooter>
      <div className="container mx-auto py-8">
        <Search />
        <p className="mt-8">Willkommen auf meiner Webseite!</p>
      </div>
    </HeaderFooter>
  );
};

export default App;
