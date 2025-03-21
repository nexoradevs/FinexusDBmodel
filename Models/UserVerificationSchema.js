const mongoose = require('mongoose');

const UserVerificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  idProofUrl: {
    type: String,
    required: true
  },
  facePhotoUrl: {
    type: String,
    required: true
  },
  upiId: {
    type: String,
    required: true
  },
  verifiedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserVerification', UserVerificationSchema);
