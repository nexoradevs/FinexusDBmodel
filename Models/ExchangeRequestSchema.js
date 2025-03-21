const mongoose = require('mongoose');

const ExchangeRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  requestType: {
    type: String,
    enum: ['U2C', 'C2U'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  remarks: {
    type: String
  },
  liveLocation: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number]
    }
  },
  status: {
    type: String,
    enum: ['neutral', 'requested', 'accepted', 'connected', 'processing', 'success', 'cancelled'],
    default: 'neutral'
  },
  acceptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  securityCode: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ExchangeRequestSchema.index({ liveLocation: '2dsphere' });

module.exports = mongoose.model('ExchangeRequest', ExchangeRequestSchema);
