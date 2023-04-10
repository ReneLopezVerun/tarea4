import MyImage from '../components/image/image';
import Product from '@/components/products/producst';
import styles from '../styles/Home.module.css';
import Pages from '@/components/pages/pages';
import Header from '../components/header/header';

const products = [
  {
    id: 1,
    title: 'Samsung Galaxy S8+ Negro',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 2,
    title: 'Samsung Galaxy S8+ Negro',
    price: 29.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S8+ Negro',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 4,
    title: 'Samsung Galaxy S8+ Negro',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 5,
    title: 'Samsung Galaxy S8+ Negro',
    price: 29.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 6,
    title: 'Samsung Galaxy S8+ Negro',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 7,
    title: 'Samsung Galaxy S8+ Negro',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 8,
    title: 'Samsung Galaxy S8+ Negro',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
  id: 9,
  title: 'Samsung Galaxy S8+ Negro',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 10,
  title: 'Samsung Galaxy S8+ Negro',
  price: 29.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 11,
  title: 'Samsung Galaxy S8+ Negro',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 12,
  title: 'Samsung Galaxy S8+ Negro',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 13,
  title: 'Samsung Galaxy S8+ Negro',
  price: 29.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 14,
  title: 'Samsung Galaxy S8+ Negro',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 15,
  title: 'Samsung Galaxy S8+ Negro',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 16,
  title: 'Samsung Galaxy S8+ Negro',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
];

const Home: React.FC = () => {
  return (

    <div className={styles.containerMain}>
        
      <div className={styles.containerHeader}>
          <Header/>
      </div>
      
      <div className={styles.containerImage}>
        <MyImage/>
      </div>

      <h1 className={styles.catalogo}>Catalogo</h1>
      <div className={styles.containerCard}>
      {products.map((product) => (
        <div className={styles.card}>
        <Product
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
          imageshop={product.imageshop}
          
        />
        </div>
      ))}
          <div className={styles.pagesContainer}>
            <Pages/>
          </div>
      </div>
    </div>
  );
};

export default Home;