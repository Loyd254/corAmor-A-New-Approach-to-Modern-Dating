import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const userId = 'currentUserId'; // Replace with actual user ID
    axios.get(`http://localhost:3000/gifts/history?userId=${userId}`)
      .then(response => setHistory(response.data))
      .catch(error => console.error('Error fetching purchase history:', error));
  }, []);

  return (
    <div>
      <h1>Purchase History</h1>
      <ul>
        {history.map(purchase => (
          <li key={purchase._id}>
            <h2>{purchase.giftId.name}</h2>
            <p>Purchased at: {new Date(purchase.purchasedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;