import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';


const Event = ({
  event, 
  /*type,
  date, 
  notes,*/
  onClick
}) => (
  <div className="event-wrapper" onClick={onClick}>
    <div className="event">

      <div className="event_info">
        {(Object.entries(Object.entries(event)[1])[1]).slice(1)}
      </div>

      <div className="event_info">
        {(Object.entries(Object.entries(event)[3])[1]).slice(1)}
      </div>

    </div>
  </div>
);



export default connect(
  (state, { index }) => ({
    event: index,
    id: Object.entries(Object.entries(index)[0][1])[0][1],
    /*type: Object.entries(Object.entries(index)[0][1]),
    notes: Object.entries(Object.entries(index)[0][1])[2][1]*/
  }),
  (dispatch, { index }) => ({
    onClick() {
      dispatch(actions.deleteEvent(index));
    },
  }),
)(Event);
