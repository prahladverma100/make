import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import home_depot_logo from '../assets/image/png/Home_Depot_Logo.png'
import aia from '../assets/image/png/aia.png'
import lowes from '../assets/image/png/lowes.png'
import risinger from '../assets/image/png/risinger.png'
import houzz from '../assets/image/png/houzz.png'
import man from '../assets/image/png/man.png'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tab_one from "../assets/video/tab-one.mp4";
import globle from "../assets/video/globle.mp4";
import frame1 from '../assets/image/png/frame1.png'
import Slider from 'react-slick'
import loop1 from '../assets/image/png/Loop1.png'
import slider from '../assets/image/png/slider.png'



const Section4 = () => {
    const sliderone = {
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,



    };
    return (
        <div className='pt-0 pt-lg-5 mt-5'>
            <Container>
                <h3 className=' fw-bold ff_sohne_schmal fs_xxl text-uppercase text-center'>The growth partner </h3>
                <p className=' fw-light ff_Maison_Neue fs_2lg text-center'>you’ve been looking for.</p>

                <p className=' fw-normal ff_space_mono fs_2sm text-center'>Businesses trust Venveo to power grow.</p>
                <div className=' justify-content-center gap-5'>

                    <div className=" pt-lg-5 mt-3 mb-5">
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-5">
                            <Tab eventKey="home" title=" Industry Expertise">
                                <div className=" position-relative  pb-5 ">
                                    <video className=" w-100 h-100 z-n1 position-absolute object-fit-cover  " loop muted
                                        autoPlay
                                        src={tab_one}
                                    ></video>
                                    <div className=" card_smart ">
                                        <Row className=" d-flex justify-content-around  align-items-center px-3  ">
                                            <Col lg={5} sm={6} className=" text-center text-sm-start">
                                                <p className=" ff_sohne_schmal line-height1 fs_xxl fw-bold text-white text-uppercase  pt-5">the smartest minds in the
                                                    industry

                                                </p>
                                                <p className=" fw-light fs_2lg text-white ff_Maison_Neue">
                                                    Answer our questions and
                                                    listen to our answers.

                                                </p>
                                                <p className=" fw-normal text-white ff_space_mono pb-5 fs_2sm mt-3">
                                                    This is placeholder but can add more{" "}
                                                    <span className=" d-lg-block">
                                                        {" "}
                                                        the business of building, some epic
                                                    </span>{" "}
                                                    <span className=" d-lg-block">
                                                        {" "}
                                                        fails (and how to avoid them) and
                                                    </span>{" "}
                                                    everything building science.
                                                </p>
                                                <button className='bg_color btn_hov d-flex align-items-center gap-2 border-0 pt-4 pb-4 ps-4 pe-4'>
                                                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_844_162)">
                                                            <path d="M9.80998 12.95C11.5442 12.95 12.95 11.5442 12.95 9.80998C12.95 8.07581 11.5442 6.66998 9.80998 6.66998C8.07581 6.66998 6.66998 8.07581 6.66998 9.80998C6.66998 11.5442 8.07581 12.95 9.80998 12.95Z" fill="white" />
                                                            <path d="M10.8105 11.0601H8.81055V22.6801H10.8105V11.0601Z" fill="white" />
                                                            <path d="M16.4192 9.80995C16.4192 6.16995 13.4592 3.19995 9.80922 3.19995C6.15922 3.19995 3.19922 6.15995 3.19922 9.80995C3.19922 12.39 4.68922 14.63 6.85922 15.71V14.57C5.26922 13.58 4.19922 11.82 4.19922 9.80995C4.19922 6.71995 6.71922 4.19995 9.80922 4.19995C12.8992 4.19995 15.4192 6.71995 15.4192 9.80995C15.4192 11.82 14.3592 13.58 12.7592 14.57V15.71C14.9192 14.62 16.4192 12.39 16.4192 9.79995V9.80995Z" fill="white" />
                                                            <path d="M19.62 9.81C19.62 4.4 15.22 0 9.81 0C4.4 0 0 4.4 0 9.81C0 14.19 2.89 17.91 6.86 19.16V18.1C3.45 16.88 1 13.63 1 9.81C1 4.95 4.95 1 9.81 1C14.67 1 18.62 4.95 18.62 9.81C18.62 13.63 16.17 16.88 12.76 18.1V19.16C16.73 17.9 19.62 14.19 19.62 9.81Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_844_162">
                                                                <rect width="19.62" height="22.68" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    <p className='text-white mb-0'>Subscribe to Podcast ▼</p>
                                                </button>
                                            </Col>
                                            <Col lg={3} sm={6} className=" d-flex flex-column justify-content-center align-items-center  gap-5 pt-5 pb-5 ">
                                                <div className=' d-flex gap-5 flex-column'>
                                                    <div className=' position-relative home_depot'>
                                                        <img src={home_depot_logo} alt="" />
                                                        <div className=' position-absolute  circle_img'>
                                                            <img src={loop1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='home_depot position-relative'>
                                                        <img src={aia} alt="" />
                                                        <div className=' position-absolute  circle_img'>
                                                            <img src={loop1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='home_depot position-relative'>
                                                        <img src={lowes} alt="" />
                                                        <div className=' position-absolute  circle_img'>
                                                            <img src={loop1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='home_depot position-relative'>
                                                        <img src={risinger} alt="" />
                                                        <div className=' position-absolute  circle_img'>
                                                            <img src={loop1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='home_depot position-relative'>
                                                        <img src={houzz} alt="" />
                                                        <div className=' position-absolute  circle_img'>
                                                            <img src={loop1} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} className=' d-flex align-items-center'>
                                                <div className='box mt-5'>
                                                    <img className='w-100' src={man} alt="" />
                                                    <p className=' ff_Maison_Neue fw-light fs_2lg'>Matt Risinger on How to Develop Lasting Relationships with Builders</p>
                                                    <p className=' ff_space_mono fw-normal fs_2sm'>
                                                        Chief Builder of Rising Build and founder of the Build Show Network
                                                    </p>
                                                    <p className=' fw-semibold ff_Maison_Neue fs_2sm'>Listen To Interview</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="ROI Focused">
                                <img className='w-100' src={slider} alt="" />
                                {/* <div className=" position-relative pt-5 mb-5   ">
                                    <video
                                        className=" w-100 h-100  position-absolute object-fit-cover z-n1 " loop muted autoPlay src={earth}
                                    ></video>
                                    <div className="  z-3  ">
                                        <div className=" px-5 pt-2">
                                            <p className="  fw-bold fs_xxl pt-5 text-uppercase ff_sohne_schmal text-white">
                                                Proven Results
                                            </p>
                                            <p className=" fw_300 fs_2lg ff_Maison_Neue text-white">
                                                Not hopes and prayers.
                                            </p>
                                        </div>
                                        <div className="pt-5 ">
                                            <img className=" yello pt-5 position-relative  mt-5 " src={Ellipse} alt="img" />
                                            <p className=' position-absolute text-white'>difjdfjfj</p>
                                            <img className=" platone position-absolute  " src={platfrom} alt="img" />
                                            <img
                                                className=" globetwo position-absolute  "
                                                src={reach_across}
                                                alt="img"
                                            />
                                            <img
                                                className=" battlethree position-absolute  "
                                                src={battle_tested}
                                                alt="img"
                                            />
                                            <img className=" ratefour position-absolute  " src={grouth_rate} alt="img" />

                                        </div>
                                    </div>

                                </div> */}
                            </Tab>
                            <Tab eventKey="contact" title="Proprietary Technology">
                                <div className=" position-relative ">
                                    <video
                                        className=" w-100 h-100 z-n1 position-absolute object-fit-cover  "
                                        loop
                                        muted
                                        autoPlay
                                        src={globle}
                                    ></video>
                                    <div className=" card_smart ">
                                        <Row className=" d-flex justify-content-around  px-3  ">
                                            <Col
                                                xl={5}
                                                md={6}
                                                className=" text-center text-sm-start mt-5 pt-3"
                                            >
                                                <p className=" text-uppercase fw_700  text-white ff_sohne_schmal fs_xxl lin_high pb-lg-4 ">
                                                    Project radar
                                                </p>
                                                <div className=" pb-5 mb-5">
                                                    {/* <Ipsum /> */}
                                                </div>
                                                <p className=" fw_300 fs_2lg text-white ff_Maison_Neue">
                                                    Lorem ipsum what this{" "}
                                                    <span className=" d-lg-block">
                                                        product actually does.
                                                    </span>
                                                </p>
                                                <p className=" fw_400 fs_2sm text-white ff_Maison_Neue mt-lg-3 pb-lg-3">
                                                    This is placeholder but can add more{" "}
                                                    <span className=" d-lg-block">
                                                        {" "}
                                                        the business of building, some epic
                                                    </span>{" "}
                                                    <span className=" d-lg-block">
                                                        {" "}
                                                        fails (and how to avoid them) and
                                                    </span>{" "}
                                                    everything building science.
                                                </p>

                                            </Col>
                                            <Col xl={5} lg={6} className=" mt-5 mt-lg-0">
                                                <Slider {...sliderone}>
                                                    <div>
                                                        <img className=" w-100 " src={frame1} alt="img" />
                                                    </div>
                                                    <div>
                                                        <img className=" w-100 " src={frame1} alt="img" />
                                                    </div>
                                                    <div>
                                                        <img className=" w-100 " src={frame1} alt="img" />
                                                    </div>
                                                    <div>
                                                        <img className=" w-100 " src={frame1} alt="img" />
                                                    </div>
                                                </Slider>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </Container >

        </div >
    )
}

export default Section4