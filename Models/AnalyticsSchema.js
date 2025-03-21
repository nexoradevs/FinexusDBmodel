const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  totalU2CRequests: { type: Number, default: 0 },
  successfulU2CRequests: { type: Number, default: 0 },
  totalC2URequests: { type: Number, default: 0 },
  successfulC2URequests: { type: Number, default: 0 },
  exchangeHistory: [{
    exchangeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ExchangeRequest'
    },
    status: { type: String },
    completedAt: { type: Date }
  }]
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
