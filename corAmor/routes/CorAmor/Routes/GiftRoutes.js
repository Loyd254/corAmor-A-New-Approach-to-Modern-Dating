const express = require('express');
const { listGifts, purchaseGift, getGiftHistory } = require('../controllers/giftController');
const router = express.Router();

// List available gifts
router.get('/', listGifts);

// Purchase a gift
router.post('/purchase', purchaseGift);

// Retrieve gift history for a user
router.get('/history', getGiftHistory);

module.exports = router;