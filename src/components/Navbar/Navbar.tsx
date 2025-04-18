import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current?.classList.add('nav-dark')
      }else{
        navRef.current?.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div className='navbar' ref={navRef} >
      <div className="navbar-left">
        <img src= {logo} alt=''/>
        <ul>
          <li>HOME</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New And Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        
        <img src={search_icon} alt='hr,o'/>
        <p>children</p>
        <img src={bell_icon} alt='helo' className='icons'/>
        <div className="navbar-profile">
        <img src={profile_icon} alt='yuu' className='profile'/>
        <img src={caret_icon} alt='uioo'/>
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign out of Netflix</p>
        </div>
        </div>
      </div>

    </div>
  )
}
export default Navbar
