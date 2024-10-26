
import {
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_FAILURE,
    FIND_PRODUCT_REQUEST,
    FIND_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_REQUEST,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_FAILURE,
    EDIT_PRODUCT_SUCCESS,
    FETCH_TOP_PRODUCTS_REQUEST,
    FETCH_TOP_PRODUCTS_FAILURE,
    FETCH_TOP_PRODUCTS_SUCCESS
} from './ActionType';

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteProduct: null,
    topProducts: [],
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case ADD_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case EDIT_PRODUCT_REQUEST:
        case FETCH_TOP_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload };

        case FIND_PRODUCT_BY_ID_SUCCESS:
        case ADD_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload };

        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, deleteProducts: action.payload }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
            }
        case FETCH_TOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                topProducts: action.payload, // Store top products in state
            };
        case FIND_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case ADD_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case EDIT_PRODUCT_FAILURE:
        case FETCH_TOP_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
