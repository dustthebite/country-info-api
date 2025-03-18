import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  events: [
    {
      countryCode: { type: String, required: true },
      year: { type: Number, required: true },
      holidayNames: [{ type: String, required: true }],
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
