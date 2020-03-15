import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
/* import AddTrafficLight from '../AddTrafficLight';
import ChangeAllTrafficLights from '../ChangeAllTrafficLights';
<TrafficLights />
    <AddTrafficLight /> 
    <ChangeAllTrafficLights /> */
import BabyForm from '../BabyForm';
import Babies from '../Babies';
import EventForm from '../EventForm';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Babies />
    <BabyForm />
    <EventForm/>
  </Provider>
);


export default App;
