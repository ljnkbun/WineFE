import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>GamesKart</span> &copy;{' '}
      {new Date().getFullYear()}

      <FontAwesomeIcon icon="fa-solid fa-circle-info" beatFade />
      {/* <div className="container footer-social text-center">
        <a href="#" target="_blank" className="btn x-btn-secondary btn-circle btn-social btn-brand" title="facebook-f">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" className="btn x-btn-secondary btn-circle btn-social btn-brand" title="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" className="btn x-btn-secondary btn-circle btn-social btn-brand" title="pinterest-p">
          <i className="fab fa-pinterest-p"></i>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
