// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    message: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'order', 'user'
    date: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false }
});

module.exports = mongoose.model('Notification', notificationSchema);
