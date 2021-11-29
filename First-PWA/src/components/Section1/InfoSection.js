import React from 'react'
import './Infosection.css'
import { Link } from 'react-router-dom'
import image from '../../images/image-1.svg'


const InfoSection = () => {
    return (
        <React.Fragment>
            <div className="info-container" id="section1">
                <div className="info-wrapper">
                    <div className="info-row">
                        <div className="column-1" data-aos="fade-up" data-aos-once="true" >
                            <div className="text-wrapper">
                                <p className="top-line">Permium Bank</p>
                                <h2 className="heading">Lorem, ipsum dolor.</h2>
                                <p className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugiat eaque cumque ipsam maiores, culpa doloremque illum quo saepe aspernatur?</p>
                                <div className="btn-wrap">
                                    <Link style={{ borderRadius: '50px' }} className="btn btn-outline-success button" to="/login">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="column-2" data-aos="zoom-in" data-aos-once="true">
                            <div className="img-wrap" >
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default InfoSection
