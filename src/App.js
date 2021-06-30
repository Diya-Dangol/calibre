import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/Global.css';
import Home from './components/default';
import SliderVersion from './components/demos/slider_version';
import ParallaxVersion from './components/demos/parallax_version';
import VideoVersion from './components/demos/video_version';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path= '/'>
            <Home />
          </Route>
          <Route exact path= '/slider_version'>
            <SliderVersion />
          </Route>
          <Route exact path= '/parallax_version'>
            <ParallaxVersion />
          </Route>
          <Route exact path= '/video_version'>
            <VideoVersion />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
