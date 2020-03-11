import * as types from '../types/events';
import * as types from '../types/eventToBabies';


export const addEvent = (id, type, dateTime, notes) => ({
  type: types.EVENT_ADDED,
  payload: { id, type, dateTime, notes },
});

export const deleteEvent =  ( id ) => ({
  type: types.EVENT_DELETED,
  payload: { id },
});

export const assignEventToBaby = (baby, trafficLight) => ({
  type: types.EVENT_BABY_ASSIGNED,
  payload: {
    baby,
    event,
  }
}) ;

export const unassignEventToBaby = (baby, trafficLight) => ({
  type: types.EVENT_BABY_UNASSIGNED,
  payload: {
    baby,
    event,
  }
});
