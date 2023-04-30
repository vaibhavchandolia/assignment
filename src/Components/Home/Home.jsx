import {useState} from 'react'
import { Carousel } from '../Carousel/Carousel'
import  data  from "./../../Data/carouselData.json"
import logo from './../../Assets/dew-drops-logo.jpg'
import about from './../../Assets/about-img.jpg'
import './Home.css'
import Modal from '../ModalForm/ModalForm'

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)

  return (
    <div id='home' className='home'>
        <Carousel data={data.slides} />
        <div className="project-details">
            <div className="home-img-con"><img className='project-img' src={logo} alt="dew-drop-logo" /></div>
            <div className="dew-detail">
                <h2>Prestige Dew Drops</h2>
                <p>Doddaballapur Main Rd, Adde Vishwanathapura, Rajanukunte, Bengaluru , 560064.</p>
            </div>
            <button className="button-5" onClick={() => setIsOpen(true)}>Enquire Now</button>
            <Modal open={isOpen} closeModal={closeModal}>
            <div className='callback-modal'>
                <span className='callbackTitle'>Request a callback</span>
                <form className='callbackForm'> 
                    <div className="input-icons">
                        <i class="fa-solid fa-user icon"></i>                 
                        <input type="text" className='input-field' placeholder='&#xf007; Your Name *' />
                    </div>
                    <div className="input-icons">
                        <i class="fa-solid fa-phone icon"></i>
                        <input type="text" className='input-field' placeholder='Your Mobile *' />
                    </div>
                    <div className="input-icons">
                        <i class="fa-solid fa-envelope icon"></i>
                        <input type="email" className='input-field' placeholder='Your Email *' />
                    </div>
                    <button className="button-5 btn-pricing" role="button">Enquire</button>
                </form>
            </div>
            </Modal>
        </div>
        <div className='about-container'>
            <h1>Where the Dream of Your Lavish Villa Experience Comes True </h1>
            <p>Become a Pride Resident of the Finest Locale of Yehalanka</p> 
            <div className="drop1">
                <div className="about-img-con"><img className='about-img' src={about} alt="about" /></div>
                <div className="about-details">
                    <div className="about-details-child">
                        <h3>Enticing Mix of Amenities</h3>
                        <p>9 Ft Grand Entrance, 10K Sq. Ft Clubhouse & Other Provisions</p>
                    </div>
                    <div className="about-details-child">
                        <h3>Exclusive Villa Luxury</h3>
                        <p>Nature Homes with Classy Interiors & Engineered-wood Flooring</p>
                    </div>
                    <div className="about-details-child">
                        <h3>Address of the Future</h3>
                        <p>Placed Near Upcoming Metro Station Connecting Airport, KR Puram, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
