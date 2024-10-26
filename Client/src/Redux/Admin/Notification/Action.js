// src/redux/actions/notificationActions.js
import { api } from '../../../Config/apiConfig'; 
import { FETCH_NOTIFICATIONS_FAILURE, FETCH_NOTIFICATIONS_REQUEST, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ_FAILURE, MARK_AS_READ_REQUEST, MARK_AS_READ_SUCCESS } from './ActionTypes';

// Fetch all notifications
export const fetchNotifications = () => async (dispatch) => {
    dispatch({ type: FETCH_NOTIFICATIONS_REQUEST });
    try {
        const response = await api.get('/api/admin/notification/');
        dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_NOTIFICATIONS_FAILURE, payload: error.message });
    }
};

// Mark a notification as read
export const markAsRead = (id) => async (dispatch) => {
    dispatch({type: MARK_AS_READ_REQUEST})
    try {
        const response = await api.patch(`/api/admin/notification/${id}/read`);
        dispatch({ type: MARK_AS_READ_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: MARK_AS_READ_FAILURE, payload: error.message });
    }
};

