import './Pricing.css'

export default function Pricing() {
  return (
    <div id='pricing' className='pricing-container'>
        <h1>Pricing & Details</h1>
        <div className="pricing-details-container">
            <div className="pricing-left">
                <div className="pricing-left-left">
                    <span><i class="fa-solid fa-house"></i>Inventory types</span>
                    <span><i class="fa-light fa-square-poll-horizontal"></i>Sizes</span>
                    <span><i class="fa-solid fa-indian-rupee-sign"></i>Price</span>    
                </div>
                <div className="pricing-left-right">
                    <span>Villa</span>
                    <span>3500 - 5800 (sq.ft)</span>
                    <span>₹3.75 Cr*</span>
                </div>
            </div>
            <div className='callback'>
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
        </div>
    </div>
  )
}
