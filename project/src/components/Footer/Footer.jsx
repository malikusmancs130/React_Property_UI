import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/*left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" width={120} alt="" />
                    <span>Our vision is to make all people <br />
                        the best place to live for them.</span>
                </div>
                {/*right side */}

                <div className="flexColStart f-right">
                    <span className='primaryText'>
                        Information
                    </span>
                    <span className='secondaryText'>
                        BY - DU - Erlangen 91058
                    </span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Service</span>
                        <span>Product</span>
                        <span>About US</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer