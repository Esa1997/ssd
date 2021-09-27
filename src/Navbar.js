import logo from './logo.png'

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sideNav active' : 'sideNav'}>
            <img src={logo} alt='Logo' className='logo' /> 
            <ul>
                <li>
                    <a href='/'>Most Liked</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='/'>Custom Made</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='/'>Save to Drive</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar