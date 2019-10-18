import { SET_CURRENT_USER } from '../../constants/actionTypes';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
