import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GiftList = () => {
  const [gifts, setGifts] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);

  useEffect(() => {
    axios.get('/gifts')
      .then(response => setGifts(response.data))
      .catch(error => console.error('Error fetching gifts:', error));
  }, []);

  const handlePurchase = (giftId) => {
    const userId = 'currentUserId'; // Replace with actual user ID
    axios.post('/gifts/purchase', { userId, giftId })
      .then(response => alert('Gift purchased successfully!'))
      .catch(error => console.error('Error purchasing gift:', error));
  };

  return (
    <div>
      <h1>Available Gifts</h1>
      <ul>
        {gifts.map(gift => (
          <li key={gift._id}>
            <img src={gift.imageUrl} alt={gift.name} />
            <h2>{gift.name}</h2>
            <p>Price: {gift.price}</p>
            <button onClick={() => handlePurchase(gift._id)}>Purchase</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;