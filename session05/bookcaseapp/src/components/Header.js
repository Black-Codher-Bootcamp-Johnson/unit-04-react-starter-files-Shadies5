import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return(
        <header>
        <h1>Bookcase</h1>
        <nav>
            <ul>
           <li> <Link to = "/">Home</Link> </li>

           <li> <Link to = "/bookcase" className= "bookLink">Books</Link> </li>
            
            <li><Link to = "/about">About</Link> </li>
            </ul>
        </nav>
        </header>
    )
}
export default Header;