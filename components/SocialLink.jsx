import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SocialLink.module.css';
import { getSocials } from '../pages/api/others/social';

const SocialLink = () => {
  const socials = getSocials();
  return (
    <div className={styles.social}>
      {Object.entries(socials).map((social, index) => {
        return (
          <div className={styles.card} key={social[1].id}>
            <Link href={social[1].link} target="_blank" >
              <Image className={styles.shake} src={social[1].image} width={50} height={50} alt={social[1].title} />
            </Link>
          </div>
        );
      })}
      <div key="phoneRing">
        <div className="alo-phone">
          <div className="alo-ph-circle"></div>
          <div className="alo-ph-circle-fill"></div>
          <div className="alo-ph-img-circle"></div>
        </div>
      </div>
      <div  key="top-page">
        <Link href="#!" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}  >
          <Image src="/arrow-top.png" width={50} height={50} alt="top-page" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLink;
