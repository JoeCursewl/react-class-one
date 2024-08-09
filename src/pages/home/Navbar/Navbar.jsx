import './Navbar.css'

export default function Navbar() {

    return (
        <nav className='navbar-all'>

            <div className='navbar'>
                <div className='navbar-logo'>
                    <img src="/logo-enjoyit.svg" alt="Enjoyit Logo" />
                </div>

                <div className ='navbar-links'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>

        </nav>        
    )
}