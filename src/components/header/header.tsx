import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="#">
          <a className={styles.logo}>
            <img src="/images/logo.png" alt="Logo" />
            <span>Página Web</span>
          </a>
        </Link>
      </div>
      <div className={styles.center}>
        <h1 className={styles.titulo} >E-commerce</h1>
        <nav className={styles.navi}>
          <ul className={styles.ull}>
            <li className={styles.lis}><Link href="#" passHref><a className={styles.as}>Home</a></Link></li>
            <li className={styles.lis}><Link href="#" passHref><a className={styles.as}>Catalogo</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
        <Link href="#" passHref><a><img src="/images/cart.png" alt="Cart" /></a></Link>
        <Link href="#" passHref><a>Crear cuenta</a></Link>
        <Link href="#" passHref><a>Mi cuenta</a></Link>
      </div>
    </header>
  );
}

export default Header;
