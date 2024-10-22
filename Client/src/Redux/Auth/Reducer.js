import { DELETE_PRODUCT_FAILURE } from '../Product/ActionType'
import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActionType'

const initialState = {
    users: [],
    user: null,
    isLoading: false,
    error: false,
    jwt: null,
    deletedUsers: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case GET_ALL_USER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case EDIT_USER_REQUEST:
            return { ...state, isLoading: true, error: null }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload }
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload }
        case GET_ALL_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, users: action.payload }
        case DELETE_USER_SUCCESS:
            return { ...state, loading: false, error: null, deleteUsers: action.payload }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload, 
            }
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case EDIT_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        case LOGOUT:
            return { ...initialState }
        default:
            return state;
    }
}