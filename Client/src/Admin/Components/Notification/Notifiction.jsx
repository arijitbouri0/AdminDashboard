import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications, markAsRead } from '../../../Redux/Admin/Notification/Action';

const Notification = () => {
    const dispatch = useDispatch();
    const { notifications, error } = useSelector((state) => state.notification);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    const handleMarkAsRead = (id) => {
        dispatch(markAsRead(id));
    };

    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
            <ul className="max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                    <li className="p-4 text-center text-gray-500 italic dark:text-gray-400">
                        No notifications available
                    </li>
                ) : (
                    notifications.map((notification) => (
                        <li 
                            key={notification._id} 
                            className="flex justify-between items-center p-4 border-b transition-all hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <div className="flex-grow">
                                <p className="text-gray-800 font-medium dark:text-gray-200">
                                    {notification.message}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(notification.date).toLocaleDateString('en-US', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                    })}
                                </p>
                            </div>
                            {!notification.isRead && (
                                <button
                                    className="ml-4 px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-500 dark:hover:bg-green-600"
                                    onClick={() => handleMarkAsRead(notification._id)}
                                >
                                    Mark as Read
                                </button>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Notification;
