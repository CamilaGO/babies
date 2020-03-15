import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
/* import TrafficLights from '../TrafficLights';
/* import AddTrafficLight from '../AddTrafficLight';
import ChangeAllTrafficLights from '../ChangeAllTrafficLights';
<TrafficLights />
    <AddTrafficLight /> 
    <ChangeAllTrafficLights /> */
import ExampleForm from '../ExampleForm';
import Babies from '../Babies';



const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Babies />
    <ExampleForm />
  </Provider>
);


export default App;
