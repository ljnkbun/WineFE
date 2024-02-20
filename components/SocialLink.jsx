import Image from 'next/image';
import styles from '../styles/SocialLink.module.css';

const SocialLink = ({ social }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Link href={social.Linkink}>
        <Image src={social.image} height={50} width={50} alt={social.title} />
      </Link>

    </div>
  );
};

export default SocialLink;
