import CategoryCard from '../components/CategoryCard';
import SocialLink from '../components/SocialLink';
import Slides from '../components/slides/Slides';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Slides />
      <div className="cus-body" >

        <div className="wrap">
          <div className="links">
            <div className="dot">
              <h3 className="heading-title">Devices</h3>
            </div>
          </div>
        </div>
        <div className={styles.small}>
          <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
          <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
          <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
        </div>
        <div className="wrap">
          <div className="links">
            <div className="dot">
              <h3 className="heading-title">Others</h3>
            </div>
          </div>
        </div>
        <div className={styles.large}>
          <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
          <CategoryCard
            image="https://imgur.com/HsUfuRU.png"
            name="Accessories"
          />
        </div>
      </div>
      <SocialLink />
    </main>
  );
};

export default HomePage;
