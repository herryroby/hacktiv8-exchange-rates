import axios from 'axios';
import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actionTypes';

const baseUrl = 'https://api.exchangeratesapi.io/latest?base=IDR&symbols=CAD,IDR,JPY,CHF,EUR,USD';

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });
    const res = await axios.get(baseUrl);
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: FETCH_DATA_ERROR, error: err.response.data });
  }
};
