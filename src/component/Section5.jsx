import React from 'react'
import jon_vaughan from '../assets/image/png/Jon_Vaughan.png'
import slider_btn from '../assets/image/png/slider_btn.png'
import slider_btn1 from '../assets/image/png/slider_btn1.png'
import slider_img from '../assets/image/png/slider_img.png'
import slider_img1 from '../assets/image/png/slider_img1.png'
import us_logo from '../assets/image/png/us_logo.png'
import Slider from 'react-slick'


const Section5 = () => {
    const slider = React.useRef(null);
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1



    };
    return (
        <div className='bg_img5 min-hight pt-0 pt-lg-5 pb-5 position-relative'>
            <div className=' position-absolute slider_btn z-2'>
                <img className='btn_width' onClick={() => slider?.current?.slickNext()} src={slider_btn} alt="" />
            </div>
            <div className=' position-absolute slider_btn1 z-2'>
                <img className='btn_width' onClick={() => slider?.current?.slickPrev()} src={slider_btn1} alt="" />
            </div>


            <p className=' ff_Maison_Neue fw-light fs_2lg text-white text-center pt-4 pt-lg-5 mt-3'> Actual businesses.</p>
            <h6 className='text-white ff_sohne_schmal fw-bold fs_xxl text-center'>Actual results.</h6>
            <p className=' ff_Maison_Neue fw-normal fs_2sm text-white text-center pb-2 pb-lg-5 '>Businesses trust Venveo to power grow.</p>
            <Slider ref={slider} {...settings} className=' settings'>
                <div>
                    <div className='d-flex justify-content-center pt-3 position-relative'>
                        <img className='w-75' src={jon_vaughan} alt="" />

                        <div className='circle d-flex justify-content-center align-items-center position-absolute '>

                            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0049 11.5L0.254884 22.3253L0.254885 0.674682L19.0049 11.5Z" fill="white" />
                            </svg>


                        </div>
                    </div>

                    <div className=' d-flex justify-content-center pt-4 mt-0 mt-lg-5'>

                        <p className=' ff_Maison_Neue text-white fs_2lg fw-light max_width text-center'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                    </div>
                    <p className='text-white fs_2sm fw-normal ff_Maison_Neue text-center '>Jon Vaughan,
                        REGIONAL VP-SE AT US LBM</p>
                    <div className=' d-flex justify-content-center'>
                        <img src={us_logo} alt="" />
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-center pt-3 position-relative'>
                        <img className='w-75' src={slider_img} alt="" />


                        <div className='circle d-flex justify-content-center align-items-center position-absolute '>

                            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0049 11.5L0.254884 22.3253L0.254885 0.674682L19.0049 11.5Z" fill="white" />
                            </svg>


                        </div>
                    </div>

                    <div className=' d-flex justify-content-center pt-4 mt-0 mt-lg-5'>

                        <p className=' ff_Maison_Neue text-white fs_2lg fw-light max_width text-center'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                    </div>
                    <p className='text-white fs_2sm fw-normal ff_Maison_Neue text-center '>Jon Vaughan,
                        REGIONAL VP-SE AT US LBM</p>
                    <div className=' d-flex justify-content-center'>
                        <img src={us_logo} alt="" />
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-center pt-3 position-relative'>
                        <img className='w-75' src={slider_img1} alt="" />


                        <div className='circle d-flex justify-content-center align-items-center position-absolute '>

                            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0049 11.5L0.254884 22.3253L0.254885 0.674682L19.0049 11.5Z" fill="white" />
                            </svg>


                        </div>
                    </div>

                    <div className=' d-flex justify-content-center pt-4 mt-0 mt-lg-5'>

                        <p className=' ff_Maison_Neue text-white fs_2lg fw-light max_width text-center'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                    </div>
                    <p className='text-white fs_2sm fw-normal ff_Maison_Neue text-center '>Jon Vaughan,
                        REGIONAL VP-SE AT US LBM</p>
                    <div className=' d-flex justify-content-center'>
                        <img src={us_logo} alt="" />
                    </div>
                </div>
            </Slider>


        </div>
    )
}

export default Section5