import React from 'react';

const ProductInfo = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
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
        <li><strong>Proteine:</strong> {product.nutriments.proteins || 0} g</li>
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
  );
};

export default ProductInfo;