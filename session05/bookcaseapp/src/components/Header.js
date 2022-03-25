import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
        <h1>Bookcase</h1>
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/bookcase" className= "bookLink">Books</Link>
            <Link to = "/about">About</Link>
        </nav>
        </header>
    )
}
export default Header;