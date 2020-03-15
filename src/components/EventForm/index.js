import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';

const EventForm = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <div className="eventForm-wrapper"> 
      <h1 className="eventForm-title">Agregar Evento</h1> 

      <div className="FormEvent">
      <div className = "FormField">
        <label className="FormField_Label" htmlFor="name">TIPO</label>
        <input type="text" className="FormField_Input" placeholder="Siesta, Pacha, Pipi, Popo o Pecho" value={value1} onChange={e => changeValue1(e.target.value)}/>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">NOTAS</label>
        <input type="text" className="FormField_Input" placeholder="Agregue notas del evento" value={value2} onChange={e => changeValue2(e.target.value)}/>
      </div>
     
      <button className="SubmitButton" type="submit" onClick={
        () => onSubmit(value1, value2)
      }>
        {'Crear'}
      </button>
    </div>

    </div>
  );
} 


export default connect(
  (state, index) => ({
    id: selectors.getEvent(state),
  }),
  (dispatch) => ({
    onSubmit(value1, value2) {
      let idEvent = uuidv4();
      dispatch(
        actions.addEvent(uuidv4(), value1, new Date(), value2),
        console.log('Event added')
        );
    },
  }),
)(EventForm);


