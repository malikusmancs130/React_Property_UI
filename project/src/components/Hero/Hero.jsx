import React from 'react';
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>
                            Discover <br />
                            Most Suitable <br />
                            Property <br />
                        </h1> 
                    </div>
                    <div className="flexColStart hero-description">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>

                    { /* Stat */}

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp Start={800} end={900} duration={4}></CountUp>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Products
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp Start={1995} end={2000} duration={4}></CountUp>
                                <span>+</span>
                            </span>

                            <span className='secondaryText'>
                                Happy Customer
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} ></CountUp>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Award Winnings
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flexColStart hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero