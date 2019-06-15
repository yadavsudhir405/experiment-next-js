import Link from 'next/Link';

const Navbar = () => (
    <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/about'>
            <a>about</a>
        </Link>
    </div>

);

export default Navbar;
