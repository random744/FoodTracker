import React, { useState } from 'react';

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
        setError("Produkt nicht in der Datenbank gefunden.");
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten.");
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

      {product && (
        <div className="border border-gray-300 rounded-lg shadow-sm p-4">
          <h2 className="text-xl font-bold mb-4">{product.product_name}</h2>
          <p><strong>Marke:</strong> {product.brands}</p>
          <p><strong>Kategorien:</strong> {product.categories}</p>
          <p><strong>Inhaltsstoffe:</strong> {product.ingredients_text}</p>
          <p><strong>Nährwerte:</strong></p>
          <ul>
            <li><strong>Kalorien:</strong> {product.nutriments['energy-kcal']} kcal</li>
            <li><strong>Fett:</strong> {product.nutriments.fat} g</li>
            <li><strong>Zucker:</strong> {product.nutriments.sugars} g</li>
            <li><strong>Proteine:</strong> {product.nutriments.proteins} g</li>
          </ul>
          <p><strong>Herkunftsländer:</strong> {product.countries}</p>
          <p><strong>Allergene:</strong> {product.allergens}</p>
          <p><strong>Labels:</strong> {product.labels}</p>
          <p><strong>Verpackung:</strong> {product.packaging}</p>
          <p><strong>Bewertung:</strong> {product.nutriscore_grade}</p>
          {product.image_url && (
            <img src={product.image_url} alt={product.product_name} className="mt-4 w-32 h-32 object-cover" />
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
