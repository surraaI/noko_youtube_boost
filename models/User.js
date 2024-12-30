const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['admin', 'user'], default: 'user' },
        isVerified: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = model('User', userSchema);
