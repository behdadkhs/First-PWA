import './HeroSection.css'
import video from '../../videos/video.mp4'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight as ArrowRight, MdArrowForward as ArrowForward } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, [])
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video loop autoPlay muted type="video/mp4" src={video}></video>
            </div>
            <div className="hero-content">
                <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="300">Lorem ipsum dolor site</h1>
                <p data-aos="fade-left" data-aos-once="true" data-aos-delay="800">Lorem ipsum dolor sit amet consectetur adipisicing elit.Error accusantium et dolore!</p>
            </div>
            <div className="herobtn-wrapper" data-aos-once="true" data-aos="fade-left" data-aos-delay="1300" >
                <Link className="heroButton" onMouseEnter={onHover} onMouseLeave={onHover} to="/signup">Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Link>
            </div>
        </div>
    )
}

export default HeroSection
