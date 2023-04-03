import MyImage from '../components/image/image';
import Header from '../components/header/header'
import Product from '@/components/products/producst';
import styles from '../styles/Home.module.css';
import Pages from '@/components/pages/pages';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of Product 1',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of Product 2',
    price: 29.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description of Product 3',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description of Product 4',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description of Product 1',
    price: 29.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description of Product 2',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description of Product 3',
    price: 39.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description of Product 4',
    price: 19.99,
    imageSrc: './product.svg',
    imageshop: './cardcart.svg',
  },
  {
  id: 9,
  title: 'Product 9',
  description: 'Description of Product 1',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 10,
  title: 'Product 10',
  description: 'Description of Product 2',
  price: 29.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 11,
  title: 'Product 11',
  description: 'Description of Product 3',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 12,
  title: 'Product 12',
  description: 'Description of Product 4',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 13,
  title: 'Product 13',
  description: 'Description of Product 1',
  price: 29.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 14,
  title: 'Product 14',
  description: 'Description of Product 2',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 15,
  title: 'Product 15',
  description: 'Description of Product 3',
  price: 39.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
{
  id: 16,
  title: 'Product 16',
  description: 'Description of Product 4',
  price: 19.99,
  imageSrc: './product.svg',
  imageshop: './cardcart.svg',
},
];

const Home: React.FC = () => {
  return (
    <div className={styles.containerMain}>
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
          description={product.description}
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