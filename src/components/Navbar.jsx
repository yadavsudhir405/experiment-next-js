import Link from 'next/Link';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a href="_blank">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="_blank"> About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
