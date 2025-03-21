const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  plan: {
    type: String,
    enum: ['monthly', 'yearly'],
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'trial'],
    default: 'trial'
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  expiredAt: {
    type: Date
  },
  history: [{
    plan: String,
    status: String,
    subscribedAt: Date,
    expiredAt: Date
  }]
});

module.exports = mongoose.model('Membership', MembershipSchema);
