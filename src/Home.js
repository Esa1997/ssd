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
            <Navbar/>
            
            <ReactFBPageRandomPhoto/>
        </>
    )
}

export default Home;