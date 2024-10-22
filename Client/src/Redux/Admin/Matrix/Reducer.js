// revenueReducer.js
import {
    FETCH_REVENUE_REQUEST,
    FETCH_REVENUE_SUCCESS,
    FETCH_REVENUE_FAILURE
} from './ActionType';

const initialState = {
    loading: false,
    revenue: null,
    error: null
};

const revenueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVENUE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_REVENUE_SUCCESS:
            return {
                ...state,
                loading: false,
                revenue: action.payload,
                error: null
            };
        case FETCH_REVENUE_FAILURE:
            return {
                ...state,
                loading: false,
                revenue: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default revenueReducer;
