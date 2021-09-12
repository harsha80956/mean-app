const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model('Category', categorySchema);

module.exports = Category