import React from 'react';
import HeaderFooter from './components/HeaderFooter';
import Search from './components/Search';

const App = () => {
  return (
    <HeaderFooter>
      <Search />
      <p>Willkommen auf meiner Webseite!</p>
    </HeaderFooter>
  );
};

export default App;
