import Images from './Images';
import Navbar from './Navbar';
import './Navbar.css'
import ReactFBPageRandomQuote from './Components/ReactFBPageRandomQuote';
import ReactFBPageRandomPhoto from './Components/ReactFBPageRandomPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

/**
 * Render Navigation bar and the relevant component
 * Routes components using Router tag
 * Switch ensure that only one route is displayed at time
 * Route tag creates individual routes to each component
 */
const Home = (props) => {
    return(
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/ssd'>
                        <Welcome />
                    </Route>
                    <Route path='/Images'>
                        <Images accessTkn={props.access_tkn} id={props.id}/>
                    </Route>
                    <Route path='/Quote'>
                        <ReactFBPageRandomQuote access_tkn={props.access_tkn}/>
                    </Route>
                    <Route path='/Photo'>
                        <ReactFBPageRandomPhoto access_tkn={props.access_tkn}/>
                    </Route>
                </Switch>
                
            </>
        </Router>
    )
}

export default Home;