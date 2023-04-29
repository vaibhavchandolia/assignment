import './VideoTour.css'

export default function VideoTour() {
  return (
    <div id='virtualtour' className='virtualTour'>
        <div className="virtualTour-con">
            <i class="fa-solid fa-circle-play play-icon"></i>
            <h1>VIRTUAL TOUR</h1>
        </div>
        <div className="about-dev-con">
            <div className="logo-img"></div>
            <div className="about-dev">
                <h1>ABOUT DEVELOPER</h1>
                <p>Over the last decade, the Prestige Group has firmly established itself as 
                    one of the leading and most successful developers of real estate in India by 
                    imprinting its indelible mark across all asset classes. 
                    Founded in 1986, the group’s turnover is today in excess of Rs. 3518 Cr (for FY 15) 
                    a leap that has been inspired by CMD Irfan Razack and marshalled by his brothers Rezwan 
                    Razack and Noaman Razack. Having completed 210 projects covering over 80 
                    million sq. ft., currently, 
                    the company has 53 ongoing projects spanning 54 million sq. ft. 
                    and 35 upcoming projects aggregating 48 million sq. ft. of world-class real 
                    estate space across asset classes.</p>
            </div>
        </div>
    </div>
  )
}
