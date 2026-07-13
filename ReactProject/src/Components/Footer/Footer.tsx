import { ContentContainer } from '../ContentContainer'
import styles from './Footer.module.css'
import { Text } from '../Text/Text'
import Facebook from "../../assets/Facebook.jpeg";
import TikTok from "../../assets/TikTok.jpeg";
import Instagram from "../../assets/Instagram.jpeg";


export const Footer = () => {
  return (
    <footer >
      <ContentContainer>
        <div className={styles.container}>

          <div className={styles['flexbox-item']}>
            <Text varient={'h2'} > We welcome you</Text>
          </div>

          <div className={styles['flexbox-item']}>
            <ul>
              <li> Shipping & Returns</li>
              <li> Size Guide</li>
              <li> Contact</li>
              <li> About Us</li>
            </ul>
          </div>

          <div className={styles['flexbox-item']}>
            <Text varient={'h2'} > Our collections combine quality craftmanship
              with aestatic to create spaces that are functional & inspiring</Text>
          </div>

          <div className={styles['flexbox-item']}>
            <Text varient={'h2'} > You can get more than you expect</Text>
          </div>
          <button className={styles.button}>
            Join Us
          </button>
        </div>
      </ContentContainer>

      <img src={Facebook} alt="Facebook photo" className={styles['Facebook']} />
      <img src={TikTok} alt="TikTok photo" className={styles['TikTok']} />
      <img src={Instagram} alt="Instagram photo" className={styles['Instagram']} />

    </footer>
  )
}
