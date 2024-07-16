import React, { useState } from 'react';
import ProductInfo from './ProductInfo';

const Search = () => {
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`);
      const data = await response.json();
      if (data.status === 1) {
        setProduct(data.product);
        setError(null);
      } else {
        setProduct(null);
        setError('Produkt nicht in der Datenbank gefunden.');
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten.');
      setProduct(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Barcode eingeben..."
          className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Suche
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <ProductInfo product={product} />
    </div>
  );
};

export default Search;