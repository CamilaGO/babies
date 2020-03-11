import omit from 'lodash/omit';

import * as types from '../types/eventToBabies';


export const assignEventToBaby = (baby, event) => ({
  type: types.EVENT_BABY_ASSIGNED,
  payload: {
    baby,
    event,
  }
}) ;

export const unassignEventToBaby = (baby, event) => ({
  type: types.EVENT_BABY_UNASSIGNED,
  payload: {
    baby,
    event,
  }
});
