const mongoose = require('mongoose');

const ExchangeLifecycleSchema = new mongoose.Schema({
  exchangeRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExchangeRequest',
    required: true
  },
  connectedAt: { type: Date },
  paymentRequestedAt: { type: Date },
  paymentConfirmedAt: { type: Date },
  cashExchangeTimerStartedAt: { type: Date },
  cashReceivedAt: { type: Date },
  successAt: { type: Date },
  history: [{
    action: { type: String },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now },
    remarks: { type: String }
  }]
});

module.exports = mongoose.model('ExchangeLifecycle', ExchangeLifecycleSchema);
