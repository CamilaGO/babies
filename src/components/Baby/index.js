import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import * as selectedActions from '../../actions/selectedBaby';
//import Light from '../Light';
import { getBabies } from '../../reducers/babies';


export const COLORS = [
  'red',
  'yellow',
  'green',
];

const Baby = ({
  isSelected = false,
  onClick,
}) => (
  <div
    className={
      `
        traffic-light-wrapper
        ${isSelected ? 'traffic-light--selected' : ''}
      `
    }
    onClick={onClick}
  >
    <div className="traffic-light">
      {
        getBabies(state).map(
          baby => (
            <Light
              key={baby}
            />
          )
        )
      }
    </div>
  
  </div>
);


export default connect(
  (state, { index }) => ({
    isSelected: selectors.getSelectedBaby(state) === index,
  }),
  (dispatch, { index }) => ({
    /*onChange() {
      dispatch(actions.changeTrafficLight(index));
    },*/
    onClick() {
      dispatch(selectedActions.selectBaby(index));
    },
  }),
)(Baby);
