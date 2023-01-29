import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

import Logo from '../images/Logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="title">
            <span className="circular-logo">
                <img src={Logo} alt="Logo" className="logo"></img>
            </span>
        </Link>
        <div className="links">
            <HashLink to='/#intro'>О нас</HashLink>
            <HashLink to='/#wares'>Товары</HashLink>
            <HashLink to='/#address'>Адрес</HashLink>
            <a href="https://www.instagram.com/frud.croched/?igshid=YmMyMTA2M2Y%3D">Instagram</a>
        </div>
    </nav>
  )
}

export default Navbar;