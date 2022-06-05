import NavbarCenter from './Navbar.Center';
import NavbarLeft from './Navbar.Left';
import NavbarRight from './Navbar.Right';
import NavbarSearch from './Navbar.Search';

const Navbar = (props) => props.children;

Navbar.Left = NavbarLeft;
Navbar.Search = NavbarSearch;
Navbar.Center = NavbarCenter;
Navbar.Right = NavbarRight;

export default Navbar;
