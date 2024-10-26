// controllers/notificationController.js
const Notification=require("../Models/notification.model")
const notificationService = require('../Service/notification.service');

// Get all notifications
const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ date: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark notification as read
const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createNotification = async (req, res) => {
    try {
        const { message, type } = req.body;
        const notification = await notificationService.createNotification(message, type);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getNotifications,
    markAsRead,
    createNotification
};
