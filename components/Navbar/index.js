import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
