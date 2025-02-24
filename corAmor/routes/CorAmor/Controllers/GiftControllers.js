const Gift = require('../models/Gift');
const Purchase = require('../models/Purchase');

// List available gifts
exports.listGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching gifts' });
  }
};

// Purchase a gift
exports.purchaseGift = async (req, res) => {
  try {
    const { userId, giftId } = req.body;
    const purchase = new Purchase({ userId, giftId });
    await purchase.save();
    res.status(201).json(purchase);
  } catch (error) {
    res.status(500).json({ error: 'Error purchasing gift' });
  }
};

// Retrieve gift history for a user
exports.getGiftHistory = async (req, res) => {
  try {
    const { userId } = req.query;
    const history = await Purchase.find({ userId }).populate('giftId');
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching gift history' });
  }
};