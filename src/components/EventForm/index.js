import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';


const EventForm = ({ onSubmit, babyID, babyName }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  
  return (
    <div className="eventForm-wrapper"> 
      <h1 className="eventForm-title">Agregar Evento</h1>
  <h1>Bebe seleccionado {babyName}</h1> 

      <div className="FormEvent">
      <div className = "FormField">
        <label className="FormField_Label" htmlFor="name">TIPO</label>
        <select value={value1} onChange={e => changeValue1(e.target.value)}>
            <option value="Siesta">Siesta</option>
            <option value="Pacha">Pacha</option>
            <option value="Pipi">Pipi</option>
            <option value="Popo">Popo</option>
            <option value="Pecho">Pecho</option>
          </select>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">NOTAS</label>
        <input type="text" className="FormField_Input" placeholder="Agregue notas del evento" value={value2} onChange={e => changeValue2(e.target.value)}/>
      </div>
     
      <button className="SubmitButton" type="submit" onClick={
        () => onSubmit(value1, value2, babyID, babyName)
      }>
        {'Crear'}
      </button>
    </div>

    </div>
  );
} 


export default connect(
  (state) => ({
    babyID: Object.entries(selectors.getSelectedBaby(state))[0][1],
    babyName: Object.entries(selectors.getSelectedBaby(state))[1][1],
  }),
  (dispatch, {state}) => ({
    onSubmit(value1, value2, babyID) {
      let eventID = uuidv4();
      console.log(babyID);
      dispatch(
        actions.addEvent(eventID, value1, new Date(), value2),
        console.log('Event added')
        );
      dispatch(
        actions.assignEventToBaby(babyID, eventID),
        console.log('Event assigned')
        );
    },
  }),
)(EventForm);


