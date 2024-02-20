import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
import { getCategories } from '../pages/api/products/categories';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const categories=getCategories();

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">Rượu Tuấn Khỉ</a>
      <ul className={styles.links}>
        
        {Object.entries(categories).map((category, index) => {
          return (
            <li className={styles.navlink}>
              <Link href={category[1].path}>{category[1].name}</Link>
            </li>
          );
        })}
       
        <li className={styles.navlink}>
          <Link href="/cart">
            Cart ({getItemsCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
