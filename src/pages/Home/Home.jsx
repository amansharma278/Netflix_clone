import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import title_img from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className='hero'>
        <img src={hero} alt="" className='banner_img' />
        <div className="heroCaption">
          <img src={title_img} alt="" className='caption-img'/>
          <p>Discovering his ties to secret ancient order, 
            a young man living in modern Istanbul embarks on a
             quest to save the city from an importal enemy. </p>

             <div className="hero_btns">
              <button className='btn'><img src={play_icon} alt="" /> Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" /> More info</button>
             </div>
             <TitleCards/>

        </div>
    </div>
      <div className="more-cards">
        <TitleCards title ={"Blockbluster Movies"}/>
        <TitleCards title ={"only on Netflix"}/>
        <TitleCards title ={"Upcoming"}/>
        <TitleCards title ={"Top pics for you"}/>
      </div>
    </div>
  )
}

export default Home