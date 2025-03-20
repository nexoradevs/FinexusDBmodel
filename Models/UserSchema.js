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
  securityCode: { type: String }, // for added security during exchanges
  profilePicture: { type: String },
  liveLocation: {
    type: {
      type: String, default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
    }
  },
  isProfileVerified: {
    type: Boolean,
    default: false
  },
  status: { // current user exchange state (optional)
    type: String,
    enum: ['neutral', 'requested', 'accepted', 'connected', 'processing', 'success'],
    default: 'neutral'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.index({ liveLocation: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);