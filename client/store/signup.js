import axios from 'axios';

const SET_NEW_SIGNUP = 'SET_SIGNUP';

export const setNewSignUp = () => {
  return {
    type: SET_NEW_SIGNUP,
    newSignup,
  };
};

export const postNewSignup = (newMember) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/signup', newMember);
      dispatch(setNewSignUp(created));
    } catch (error) {
      console.log('ERROR CREATING NEW SIGNUP', error);
    }
  };
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NEW_SIGNUP:
      return [...state, action.newSignup];
    default:
      return state;
  }
}
