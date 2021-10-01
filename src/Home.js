import { GiHamburgerMenu } from 'react-icons/gi';
import { CgLogOff } from "react-icons/cg";
import Images from './Images';
import Navbar from './Navbar';
import './Navbar.css'

const Home = (props) => {
    return(
        <>
            <Navbar/>
            <Images accessTkn={props.access_tkn}/>
        </>
    )
}

export default Home;