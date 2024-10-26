import { FETCH_NOTIFICATIONS_FAILURE, FETCH_NOTIFICATIONS_REQUEST, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ_FAILURE, MARK_AS_READ_REQUEST, MARK_AS_READ_SUCCESS } from './ActionTypes';

const initialState = {
    notifications: [],
    loading: false,
    error: null,
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_REQUEST:
        case MARK_AS_READ_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.payload,
                loading: false,
            };
        case MARK_AS_READ_SUCCESS:
            return {
                ...state,
                notifications: state.notifications.map((notification) =>
                    notification._id === action.payload._id ? action.payload : notification
                ),
            };
        case FETCH_NOTIFICATIONS_FAILURE:
        case MARK_AS_READ_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default notificationReducer;
