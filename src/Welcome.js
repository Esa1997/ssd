import welcome from './welcome.png';
import './Images.css'

//render welcome component
const Welcome = () => {
    return(
        <div className='center'>
            <img src={welcome} />
        </div>
    )
}

export default Welcome;