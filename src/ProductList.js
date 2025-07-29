import React, { useState } from 'react';
import mockProducts from './mockProducts'; // ✅ Static product data

const ProductList = () => {
  const [pagination, setPagination] = useState({ page: 1, limit: 5 });

  const startIndex = (pagination.page - 1) * pagination.limit;
  const paginatedProducts = mockProducts.slice(startIndex, startIndex + pagination.limit);
  const totalPages = Math.ceil(mockProducts.length / pagination.limit);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>📦 Product List</h2>

      {paginatedProducts.map((product) => (
        <div
          key={product._id}
          style={{
            padding: '15px',
            border: '1px solid #ccc',
            marginBottom: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            backgroundColor: '#f9f9f9'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=No+Image';
            }}
            style={{
              width: '150px',
              height: 'auto',
              borderRadius: '10px',
              border: '1px solid #ddd',
              objectFit: 'cover'
            }}
          />
          <div>
            <h3 style={{ marginBottom: '8px' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#222' }}>₹ {product.price}</p>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button
          onClick={() => setPagination((prev) => ({ ...prev, page: prev.page - 1 }))}
          disabled={pagination.page === 1}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #999',
            backgroundColor: pagination.page === 1 ? '#ccc' : '#eee',
            cursor: pagination.page === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          ⬅ Previous
        </button>

        <span style={{ fontWeight: 'bold' }}>
          Page {pagination.page} of {totalPages}
        </span>

        <button
          onClick={() => setPagination((prev) => ({ ...prev, page: prev.page + 1 }))}
          disabled={pagination.page === totalPages}
          style={{
            padding: '8px 16px',
            marginLeft: '10px',
            borderRadius: '5px',
            border: '1px solid #999',
            backgroundColor: pagination.page === totalPages ? '#ccc' : '#eee',
            cursor: pagination.page === totalPages ? 'not-allowed' : 'pointer'
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default ProductList;
