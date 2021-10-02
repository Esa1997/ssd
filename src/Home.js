import Images from './Images';
import Navbar from './Navbar';
import './Navbar.css'
import ReactFBPageRandomQuote from './Components/ReactFBPageRandomQuote';
import ReactFBPageRandomPhoto from './Components/ReactFBPageRandomPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

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