import * as types from '../types/selectedBaby';


export const selectBaby = id => ({
  type: types.BABY_SELECTED,
  payload: id,
});
