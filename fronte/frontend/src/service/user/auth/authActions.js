import { LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE } from './authTypes';
import axios from 'axios';

const AUTH_URL = 'http://localhost:8080/auth/login';

export const authenticateUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    if (email === 'test@gmail.com' && password === 'test') {
      console.log(email);
      dispatch(success());
    } else {
      dispatch(failure());
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem('jwtToken');
    dispatch(success({ username: '', isLoggedIn: false }));
  };
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const success = () => {
  return {
    type: SUCCESS,
    payload: true,
  };
};

const failure = () => {
  return {
    type: FAILURE,
    payload: false,
  };
};
