import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import LoadingContainer from './LoadingContainer';
import Home from './Home';
import PerceivedDemographics from './PerceivedDemographics';
import RegionsContainer from './RegionsContainer';
import LandmarksContainer from './LandmarksContainer';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/PerceivedDemographics">PerceivedDemographics</Link></li>
        <li><Link to="/Regions">Regions</Link></li>
        <li><Link to="/Landmarks">Landmarks</Link></li>
      </ul>

      <hr />

      <LoadingContainer />

      <Route exact path="/" component={Home} />
      <Route path="/PerceivedDemographics" component={PerceivedDemographics} />
      <Route path="/Regions" component={RegionsContainer} />
      <Route path="/Landmarks" component={LandmarksContainer} />
    </div>

  </Router>
);

export default App;
