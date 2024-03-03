import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocialWrapper}>
        <div className={styles.footerSocial}>
          <div className={styles.btnSocial}>
            <a href="https://www.facebook.com/hqt994" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} beatFade />
            </a>
          </div>
          <div className={styles.btnSocial}>
            <a href="https://www.facebook.com/hqt994" target="_blank">
              <FontAwesomeIcon icon={faTwitter} shake />
            </a>
          </div>
          <div className={styles.btnSocial}>
            <a href="https://www.facebook.com/hqt994" target="_blank">
              <FontAwesomeIcon icon={faPinterestP} spin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomWrapper}>
        <div className={styles.footerBottom}>
            <strong>Thưởng thức có trách nhiệm</strong><br />Các sản phẩm rượu không dành cho người dưới 18 tuổi và phụ nữ đang mang thai.<br />Bản quyền © 2024 <a href="/">Rượu Tuấn Khỉ</a> Hiện thân của sự cống hiến không ngừng để đạt tới sự hoàn hảo
        </div>
      </div>
    </footer >

  );
};

export default Footer;
