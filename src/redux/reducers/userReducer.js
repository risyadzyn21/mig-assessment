import * as actions from '../actions/actionsType'

const initialState = {
  token: '',
  currentUser: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        isLoading: false

      };
    case actions.GET_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    default:
      return state;
  }
}
export default userReducer
