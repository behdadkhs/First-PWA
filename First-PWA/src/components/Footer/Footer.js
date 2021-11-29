import React from 'react'
import './Footer.css'

import 'aos/dist/aos.css'

const Footer = () => {
    return (
        <div >
            <footer className="bg-dark text-center text-white" id="footer">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="50" data-aos-once="true" className="btn btn-outline-light btn-floating m-1 footer-button" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i>
                        </a>

                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="400" data-aos-once="true" className="btn btn-outline-light btn-floating m-1  footer-button" href="#!" role="button"
                        ><i className="fab fa-twitter"></i>
                        </a>

                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="700" data-aos-once="true" className="btn btn-outline-light btn-floating m-1 footer-button" href="#!" role="button"
                        ><i className="fab fa-google"></i>
                        </a>

                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="700" data-aos-once="true" className="btn btn-outline-light btn-floating m-1 footer-button" href="#!" role="button"
                        ><i className="fab fa-instagram"></i>
                        </a>

                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="400" data-aos-once="true" className="btn btn-outline-light btn-floating m-1 footer-button" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i>
                        </a>

                        <a data-aos="slide-up" data-aos-offset="-100" data-aos-delay="50" data-aos-once="true" className="btn btn-outline-light btn-floating m-1 footer-button" href="#!" role="button"
                        ><i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a style={{ textDecoration: "none" }} className="text-white" href="/#"> MyWebsite.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
