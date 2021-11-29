import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom'
import image from '../../images/image-2.svg'


const Section2 = () => {
    return (
        <React.Fragment>
            <div className="info2-container" id="section2">
                <div className="info-wrapper">
                    <div className="info-row">
                        <div className="column-1" data-aos="zoom-out-up" data-aos-once="true">
                            <div className="text-wrapper">
                                <p className="top-line">Permium Bank</p>
                                <h2 className="heading2">Lorem, ipsum dolor.</h2>
                                <p className="subtitle2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugiat eaque cumque ipsam maiores, culpa doloremque illum quo saepe aspernatur?</p>
                                <div className="btn-wrap">
                                    <Link style={{ borderRadius: '50px', padding: "10px 18px" }} className=" btn btn-success" to="home">Join Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="column-2" data-aos="zoom-out-up" data-aos-once="true">
                            <div className="img-wrap">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Section2
