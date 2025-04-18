import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt=''></img>
        <img src={instagram_icon} alt=''></img>
        <img src={twitter_icon} alt=''></img>
        <img src={youtube_icon} alt=''></img>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Meida centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cooki Preference</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>c 1977-2023 Netflix, Inc</p>
    </div>
  )
}
export default Footer

