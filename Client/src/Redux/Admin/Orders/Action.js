import { CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";
import {api} from '../../../Config/apiConfig'

export const getOrders = () => async (dispatch) => {

    dispatch({ type: GET_ORDERS_REQUEST });
    try {
        const response = await api.get(`/api/admin/orders/`);
        const data=response.data;
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message })
       
    }
}

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        const data=response.data;
        console.log(data);
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message })
      
    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        const response = await api.delete(`/api/admin/orders/${orderId}/delete`);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderId });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
        
    }
}

export const deliverOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/delivered`);
        const data=response.data;
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
       
    }
}

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/ship`);
        const data=response.data;
        dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message })
       
    }
}