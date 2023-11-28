import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import wsj from '../assets/image/png/wsj.png'
import entrepreneur from '../assets/image/png/entrepreneur.png'
import fortune from '../assets/image/png/fortune.png'
import forbes from '../assets/image/png/forbes.png'
import inc from '../assets/image/png/inc.png'
import img_line from '../assets/image/png/img_line.png'
import hero_section_line from '../assets/image/png/hero_section_line.png'


const Featured = () => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            }

        ]

    };
    return (
        <div>
            <div className='w-100'>
                <img className='w-100' src={img_line} alt="" />
            </div>
            <div className='pt-1 pt-lg-5 mt-5'>
                <Container>
                    <div className='pt-5 mt-5'>
                        <p className='fs_2sm fw-normal ff_Maison_Neue text-center pb-4 pb-lg-5'>Featured in</p>
                        <Slider {...settings}>
                            <div className='d-flex justify-content-center'> <img src={wsj} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={entrepreneur} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={fortune} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={forbes} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={inc} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={wsj} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={entrepreneur} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={fortune} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={forbes} alt="" /></div>
                            <div className='d-flex justify-content-center'> <img src={inc} alt="" /></div>
                        </Slider>
                    </div>
                </Container>
                <div className='pt-4 pb-lg-5 mt-0 mt-lg-5'>
                    <img className='w-100' src={hero_section_line} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured