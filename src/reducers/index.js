import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import eventToBabies, * as eventToBabiesSelectors from './eventToBabies';
import selectedBaby, * as selectedBabySelectors from './selectedBaby';


const reducer = combineReducers({
  babies,
  events,
  eventToBabies, 
  selectedBaby,
});


export default reducer;


export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);
export const getBabies = state => babiesSelectors.getBaby(state.babies);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);
export const getEvents = state => eventsSelectors.getEvent(state.events);

export const getEventBaby  = (state, babyID) => eventsSelectors.getEventBaby(state.events, babyID);
export const getEventsBabies = state => eventsSelectors.getEventBaby(state.events);


export const getAssignedEvent = (
  state,
  babyId,
) => eventToBabiesSelectors.getAssignedEvent(
  state.eventToBabies,
  babyId,
);  

export const getAssignedEvents = state => eventToBabiesSelectors.getAssignedEvent(state.eventToBabies);

export const getSelectedBaby = (
  state =>
    selectedBabySelectors.getSelectedBaby(
      state.selectedBaby,
    )
);
