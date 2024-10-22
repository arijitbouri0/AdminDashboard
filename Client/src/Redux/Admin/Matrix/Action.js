// actions.js
import {
    FETCH_REVENUE_REQUEST,
    FETCH_REVENUE_SUCCESS,
    FETCH_REVENUE_FAILURE
} from './ActionType.js';

import {api} from '../../../Config/apiConfig'

export const fetchRevenue = ({ startDate, endDate, filterOption }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_REVENUE_REQUEST });
            const response = await api.post('/api/admin/revenue', {
                startDate,
                endDate,
                filterOption
            });
            if (response.data.success) {
                dispatch({
                    type: FETCH_REVENUE_SUCCESS,
                    payload: response.data.totalRevenue
                });
            } else {
                dispatch({
                    type: FETCH_REVENUE_FAILURE,
                    payload: response.data.message
                });
            }
        } catch (error) {
            dispatch({
                type: FETCH_REVENUE_FAILURE,
                payload: error.message || "Failed to fetch revenue"
            });
        }
    };
};
