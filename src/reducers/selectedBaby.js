import * as types from '../types/selectedBaby';


const selectedBaby = (state = null, action) => {
  switch (action.type) {
    case types.BABY_SELECTED: {
      return action.payload; // index
    }
    default: {
      return state;
    }
  }
};


export default selectedBaby;


export const getSelectedBaby = state => state;
