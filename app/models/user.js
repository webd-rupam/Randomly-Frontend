import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Track if the user is verified
  verificationToken: { type: String }, // Store the token for email verification
});

// Export the model or use the existing one if already defined
export default mongoose.models.User || mongoose.model('User', userSchema);
