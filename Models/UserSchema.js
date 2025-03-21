const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  securityCode: { type: String },
  profilePicture: { type: String },
  liveLocation: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number] // [longitude, latitude]
    }
  },
  isProfileVerified: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  blockReason: { type: String },
  status: {
    type: String,
    enum: ['neutral', 'requested', 'accepted', 'connected', 'processing', 'success'],
    default: 'neutral'
  },
  premium: {
    status: {
      type: String,
      enum: ['active', 'expired', 'trial'],
      default: 'expired'
    },
    plan: {
      type: String,
      enum: ['monthly', 'yearly', 'none'],
      default: 'none'
    },
    subscribedAt: { type: Date },
    expiredAt: { type: Date }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.index({ liveLocation: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);
