import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Suche nach: ${query}`);
    // Hier kannst du den Suchvorgang implementieren
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Suche..."
      />
      <button type="submit">Suche</button>
    </form>
  );
};

export default Search;
