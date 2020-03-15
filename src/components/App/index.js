import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import AddTrafficLight from '../AddTrafficLight';
import ChangeAllTrafficLights from '../ChangeAllTrafficLights';
<TrafficLights />
    <AddTrafficLight /> 
    <ChangeAllTrafficLights />

    <Babies />
    <Events />
    <BabyForm />
    <EventForm/> */
import BabyForm from '../BabyForm';
//import Babies from '../Babies';
import EventForm from '../EventForm';
import Events from '../Events';
import AllBabies from './AllBabies';
import TheEvents from './TheEvents';
import Nav from './Nav';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/allbabies" component={AllBabies}/>
          <Route path="/theEvents" component={TheEvents} /> 
        </Switch>     
      </div>
    </Router>
  </Provider>
);

/*function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/theEvents" component={TheEvents} /> 
        </Switch>     
      </div>
    </Router>
  )
}*/


export default App;
