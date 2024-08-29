import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className='navbar-all'>

            <div className='navbar'>
                <div className='navbar-logo'>
                    <Link to={'/elperrito'}>
                        <img src="/logo-enjoyit.svg" alt="Enjoyit Logo" />
                    </Link>
                </div>

                <div className ='navbar-links'>
                    <ul>
                        <Link to={'/home'}>
                            <li>Home</li>
                        </Link>
                        <li>About</li>
                    </ul>
                </div>
            </div>

        </nav>        
    )
}