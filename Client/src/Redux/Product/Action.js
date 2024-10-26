import { api } from '../../Config/apiConfig'; 
import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    FETCH_TOP_PRODUCTS_FAILURE,
    FETCH_TOP_PRODUCTS_REQUEST,
    FETCH_TOP_PRODUCTS_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_FAILURE,
    FIND_PRODUCT_REQUEST,
    FIND_PRODUCT_SUCCESS
} from './ActionType';



export const findProducts = (params = {}) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    try {
        const { data } = await api.get(`/api/products`, { params });
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const {productId}=reqData;
    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};

export const addProduct = (productData) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
   console.log(productData);
    try {
      const { data } = await api.post('/api/admin/products/', productData);
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
    }
  };

  export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/products/${productId}`,
        // {
        //   headers: {
        //         Authorization: `Bearer ${jwt}`
        //     }
        // }
      );
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
  };


  export const editProduct = (productId, productData) => async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT_REQUEST });
    try {
        const response = await api.put(`/api/admin/products/${productId}`, productData);
        const updatedProduct = response.data;
        dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: updatedProduct });
    } catch (error) {
        dispatch({ type: EDIT_PRODUCT_FAILURE, payload: error.message });
    }
};

export const fetchTopProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TOP_PRODUCTS_REQUEST });
    
    try {
      const response = await api.get('/api/admin/products/top');
      dispatch({ type: FETCH_TOP_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TOP_PRODUCTS_FAILURE, payload: error.message });
    }
  };
};
