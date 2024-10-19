import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model or use the existing one if already defined
export default mongoose.models.User || mongoose.model('User', userSchema);
