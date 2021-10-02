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
                    <Route exact path='/'>
                        <Welcome />
                    </Route>
                    <Route path='/Images'>
                        <Images accessTkn={props.access_tkn} id={props.id}/>
                    </Route>
                    <Route path='/Quote'>
                        <ReactFBPageRandomQuote/>
                    </Route>
                    <Route path='/Photo'>
                        <ReactFBPageRandomPhoto/>
                    </Route>
                </Switch>
                
            </>
        </Router>
    )
}

export default Home;