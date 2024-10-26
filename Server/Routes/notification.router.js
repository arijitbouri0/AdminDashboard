// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../Controller/notification.controller');

router.get('/', notificationController.getNotifications);

router.patch('/:id/read', notificationController.markAsRead);

router.post('/', notificationController.createNotification);

module.exports = router;
