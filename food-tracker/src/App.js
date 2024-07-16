import React from 'react';
import HeaderFooter from './components/HeaderFooter';
import Search from './components/Search';

const App = () => {
  return (
    <HeaderFooter>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Barcode eintragen</h1>
        <Search />
      </div>
    </HeaderFooter>
  );
};

export default App;
