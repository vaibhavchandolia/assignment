import './Location.css'

export default function Location() {
  return (
    <div id='location' className='location-container'>
        <div className="location-head">
            <h1>Location</h1>
        </div>
        <ul className='location-parent'>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Sai Vidya Institute of Technology - 7 Mins</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Orchids International School - 10 Mins</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Omega Multispecialty hospital - 19 Mins</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Garuda Mall - 20 Mins</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Manyata Tech park  - 40 Mins</li>
            <li><span className='li-icon'><i class="fa-sharp fa-solid fa-location-dot"></i></span>Airport - 40 Mins</li>
        </ul>
    </div>
  )
}
