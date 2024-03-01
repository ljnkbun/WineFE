import Link from 'next/link';
import ImageLink from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from '../../styles/Navbar.module.css';
import { getCategories } from '../../pages/api/products/categories';
import MenuItems from './MenuItems';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const categories = getCategories();

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <nav className={styles.navbar}>

      <a href="/" className={styles.logo}>
        <Image
          key="home" src="https://imgur.com/3CF1UhY.png" alt="Home" width={60}
          height={60}
        />
        Rượu Tuấn Khỉ
      </a>
      <ul className={styles.links}>
        {Object.entries(categories).map((category, index) => {
          return <MenuItems items={category[1]} key={index} />;
        })}

        <li className={styles.navlink} key="cart">
          <Link href="/cart">
            Cart ({getItemsCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
