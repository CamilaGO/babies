import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import Baby from '../Baby';


const Babies = ({ number }) => (
  <div className="traffic-lights">
    {
      number === 0 ? (
        <h1>
          {'No hay bebes :('}
        </h1>
      ) : (
        range(number).map(
          index => (
            <Baby
              key={index}
              index={index}
            />
          ),
        )
      )
    }
  </div>
);


export default connect(
  state => ({
    number: selectors.getBabies(state).length,
  }),
)(Babies);
