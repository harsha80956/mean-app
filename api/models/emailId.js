const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true},
    category: { type: mongoose.Schema.Types.ObjectID, ref: 'Category' },
    user: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;