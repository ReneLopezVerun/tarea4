import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <img className={styles.headerlogo} src="headerlogo.svg" alt="headerlogo" />
        
        <div className={styles.titlesCont}>
        <h1 className={styles.title}>E-commerce</h1>
        <div className={styles.subtitles}>
          <h2 className={styles.subtitle}>Home</h2>
          <h2 className={styles.subtitle}>Catalogo</h2>
        </div>
        </div>
      
        <div className={styles.cuentas}>
          <div className={styles.cartCont}>
          
          <img className={styles.headerCart} src="Vector.svg" alt="headerlogo" />

          <div className={styles.llantas}>
          <img className={styles.headerLlanta} src="llanta.svg" alt="headerlogo" />
          <img className={styles.headerLlanta} src="llanta.svg" alt="headerlogo" />
          </div>
          
          </div>
          <h2 className={styles.subtitle}>Crear cuenta</h2>
          <h2 className={styles.subtitle}>Mi cuenta</h2>
        </div>

      </div>
    </header>
  );
}

export default Header;
