// services/notificationService.js
const Notification = require('../Models/notification.model');

const createNotification = async (message, type) => {
    const notification = new Notification({ message, type });
    await notification.save();
    return notification;
};

module.exports = {
    createNotification
};
