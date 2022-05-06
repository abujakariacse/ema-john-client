import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/about">About</Link>
                {
                    user ? <Link onClick={handleSignOut} to='/login'>Sign Out</Link> : <Link to="/login">Login</Link>
                }

            </div>
        </nav>
    );
};

export default Header;