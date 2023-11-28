import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import amberbook from '../assets/image/png/AmberBook.png'
import farnsworth from '../assets/image/png/farnsworth.png'
import us_lbm from '../assets/image/png/us_lbm.png'
import squiggle1 from '../assets/image/png/squiggle1.png'

const Section2 = () => {
    return (
        <div className=''>
            <Container>
                <p className=' fw-light fs_2lg ff_Maison_Neue text-center pt-4 mt-3 pt-lg-5'>Driving digital revenue for over</p>
                <div className=' position-relative '>
                    <h2 className=' fw-bold fs_xxl ff_sohne_schmal text-uppercase text-center'>1,400+ satisfied clients.</h2>
                    <img className=' position-absolute  img_left' src={squiggle1} alt="" />
                </div>

            </Container>
            <Row className='pt-2 pt-lg-5 mt-3'>
                <Col md={6} lg={4} className='d-flex justify-content-center'>
                    <div className='bg_card1 mb-3'>
                        <div className='box1'>
                            <img src={amberbook} alt="" />
                            <h6 className='pt-3 fs_2lg ff_Maison_Neue fw-normal max-width'>Driving digital revenue for over 1,000+ satisfied clients.</h6>
                            <p className='fs_2sm fw-normal ff_space_mono'>Elevate your business with our top-tier services and tech</p>
                            <div className='d-flex pt-5 align-items-center gap-2'>
                                <p className=' fs_md fw-semibold ff_Maison_Neue mb-0'>Learn more</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>
                        </div>
                        <div className='d-flex gap-5 justify-content-center'>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal '>80%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>2X</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Ad Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>520%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Web Traffic</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4} className='d-flex justify-content-center'>
                    <div className='bg_card mb-3'>
                        <div className='box1'>
                            <img src={farnsworth} alt="" />
                            <h6 className='pt-3 fs_2lg ff_Maison_Neue fw-normal max-width'>Driving digital revenue for over 1,000+ satisfied clients.</h6>
                            <p className='fs_2sm fw-normal ff_space_mono'>Elevate your business with our top-tier services and tech</p>
                            <div className='d-flex pt-5 align-items-center gap-2'>
                                <p className=' fs_md fw-semibold ff_Maison_Neue mb-0'>Learn more</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>
                        </div>
                        <div className='d-flex gap-5 justify-content-center'>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>80%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>2X</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue '>Ad Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>520%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Web Traffic</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='d-flex justify-content-center'>
                    <div className='bg_card2 mb-3'>
                        <div className='box1'>
                            <img src={us_lbm} alt="" />
                            <h6 className='pt-3 fs_2lg ff_Maison_Neue fw-normal max-width'>Driving digital revenue for over 1,000+ satisfied clients.</h6>
                            <p className='fs_2sm fw-normal ff_space_mono align-self'>Elevate your business with our top-tier services and tech</p>
                            <div className='d-flex pt-5 align-items-center gap-2'>
                                <p className=' fs_md fw-semibold ff_Maison_Neue mb-0'>Learn more</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>

                        </div>
                        <div className='d-flex gap-5 justify-content-center'>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>80%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>2X</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Ad Leads</p>
                            </div>
                            <div className='pt-3 text-center'>
                                <h6 className=' fw-bold fs_2xl ff_sohne_schmal'>520%</h6>
                                <p className=' fw-normal fs_2sm ff_Maison_Neue'>Web Traffic</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Section2