import userActionTypes from "./userTypes";

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGNIN_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isLoading: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
