import {
    CONFIRMED_ORDER_FAILURE,
    CONFIRMED_ORDER_REQUEST,
    CONFIRMED_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELIVERED_ORDER_FAILURE,
    DELIVERED_ORDER_REQUEST,
    DELIVERED_ORDER_SUCCESS,
    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    SHIP_ORDER_FAILURE,
    SHIP_ORDER_REQUEST,
    SHIP_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
    orders: [],
    loading: false,
    error: null,
    confirmedOrder: null,
    deletedOrder: null,
    deliveredOrder: null,
    shippedOrder: null,
};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get Orders
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Confirm Order
        case CONFIRMED_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CONFIRMED_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmedOrder: action.payload,
            };
        case CONFIRMED_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Delete Order
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                deletedOrder: action.payload,
            };
        case DELETE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Deliver Order
        case DELIVERED_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELIVERED_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                deliveredOrder: action.payload,
            };
        case DELIVERED_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Ship Order
        case SHIP_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SHIP_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                shippedOrder: action.payload,
            };
        case SHIP_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default adminOrderReducer;
