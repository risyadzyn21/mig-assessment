import API from "../../services";
import {
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE
} from './actionsType'

export const getLogin = () => ({
  type: GET_LOGIN
});

export const getLoginSuccess = (login) => {
  return {
    type: GET_LOGIN_SUCCESS,
    payload: login
  };
};

export const getLoginFailure = (error) => {
  return {
    type: GET_LOGIN_FAILURE,
    error
  };
};

// Async actions
export const getLoginAsync = (params = { email: 'risyad@mig.id', password: 123456 }) => {
  return async (dispatch) => {
    dispatch(getLogin());

    try {
      const res = await API.post("/login", { params });

      dispatch(getLoginSuccess(res.data.access_token));
    } catch (error) {
      dispatch(getLoginFailure(error));
    }
  };
};
