import axios from "axios"; // Make sure this path is correct
import { API_BASE_URL } from "../../Config/apiConfig";
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGOUT,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from "../Auth/ActionType";


// FOR REGISTER
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(registerSuccess(user.jwt));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
};

// FOR LOGIN
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

// FOR GET USERS
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`);
        const user = response.data;

        dispatch(getUserSuccess(user), {
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        })
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
};

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USER_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users`);
        const data = response.data;

        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: data,
        })
    }
    catch {
        dispatch({ type: GET_ALL_USER_FAILURE, payload: error.message })
    }
}
// FOR LOGOUT
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
};


//for user delete
export const deleteUser = (userId) => async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/users/profile/${userId}`)
        const data = response.data;
        dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
    }
};


export const editUser = (userId, userData) => async (dispatch) => {
    dispatch({ type: EDIT_USER_REQUEST });
    try {
        const response = await axios.put(`${API_BASE_URL}/api/users/profile/${userId}`, userData);
        const updatedUser = response.data;
        dispatch({ type: EDIT_USER_SUCCESS, payload: updatedUser });
    } catch (error) {
        dispatch({ type: EDIT_USER_FAILURE, payload: error.message });
    }
};