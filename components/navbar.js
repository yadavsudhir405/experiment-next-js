import Link from 'next/Link';

const Navbar = () => (
    <div>
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a> About</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
             ul {
                background: hsl(24, 100%, 50%);
                color: hsl(0, 0%, 0%);
                list-style: none;
                display: flex;
             }
        `}
        </style>
    </div>

);

export default Navbar;
