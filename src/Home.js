import { GiHamburgerMenu } from 'react-icons/gi';
import { CgLogOff } from "react-icons/cg";
import Images from './Images';
import Navbar from './Navbar';
import './Navbar.css'
import ReactFBPageRandomQuote from './Components/ReactFBPageRandomQuote';

const Home = (props) => {
    return(
        <>
            <Navbar picture={JSON.stringify(props.picture)}/>
            <Images accessTkn={props.access_tkn} id={props.id}/>
        </>
    )
}

export default Home;