import { GiHamburgerMenu } from 'react-icons/gi';
import { CgLogOff } from "react-icons/cg";
import Images from './Images';
import Navbar from './Navbar';
import './Navbar.css'
import ReactFBPageRandomQuote from './Components/ReactFBPageRandomQuote';
import ReactFBPageRandomPhoto from './Components/ReactFBPageRandomPhoto';

const Home = (props) => {
    return(
        <>
            <Navbar picture={JSON.stringify(props.picture)}/>
            <Images accessTkn={props.access_tkn} id={props.id}/>
            <ReactFBPageRandomPhoto/>
        </>
    )
}

export default Home;