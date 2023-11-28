import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import product_img from '../assets/image/png/product_img.png'
import building from '../assets/image/png/building.png'
import sales_team from '../assets/image/png/sales_team.png'
import made_bands from '../assets/image/png/made_bands.png'
const Section6 = () => {
    return (
        <div className='pb-5'>
            <Container>
                <h4 className='fs_xxl fw-bold text-uppercase ff_sohne_schmal text-center pt-5 mt-0 mt-lg-5'>Learn from us.</h4>
                <p className=' ff_space_mono fw-normal fs_2sm text-center'>Digital marketing resources from Venveo to help you grow.</p>
                <p className='text-center ff_Maison_Neue fw-semibold fs_2sm pt-4 pb-0 mb-lg-5 mb-5'>See All</p>
                <div className='bg_img6 min-vh70 position-relative'>
                    <div className=' position-absolute bands_img'>
                        <img src={made_bands} alt="" />
                    </div>
                    <div className='guides_card1 position-absolute bottom-0 ms-3 me-3 mb-4'>
                        <p className=' text-uppercase fw-normal fs_2sm light_blue ff_Maison_Neue'>guides</p>
                        <p className=' fw-light ff_Maison_Neue fs_2lg pt-3'>Marketing to Contractors and Installers:The Ultimate Guide</p>
                        <p className='fw-normal fs_2sm ff_space_mono'>Understanding the process and maximize the opportunities</p>

                        <div className='d-flex  align-items-center pt-2 pt-sm-5 gap-2'>
                            <p className='ff_Maison_Neue fs_2sm fw-semibold mb-0'>Read More</p>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
            <Row>
                <Col lg={4} md={6}>
                    <div className=' position-relative'>
                        <img className='w-100 mt-5 card_hov' src={product_img} alt="" />
                        <div className='guides_card position-absolute bottom-0 ms-3 me-3 mb-4'>
                            <p className=' text-uppercase fw-normal fs_2sm light_blue ff_Maison_Neue mb-0'>multi-channel marketing</p>
                            <p className=' fw-light ff_Maison_Neue fs_2lg pt-3'>How to Get Your Product into Lowe’s</p>
                            <p className='fw-normal fs_2sm ff_space_mono pb-4'>Understanding the process and maximize the opportunities</p>

                            <div className='d-flex  align-items-center pt-2 pt-sm-5 gap-2'>
                                <p className='ff_Maison_Neue fs_2sm fw-semibold mb-0'>Read More</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </Col>
                <Col lg={4} md={6}>
                    <div className=' position-relative'>
                        <img className='w-100 mt-5' src={sales_team} alt="" />
                        <div className='guides_card position-absolute bottom-0 ms-3 me-3 mb-4'>
                            <p className=' text-uppercase fw-normal fs_2sm light_blue ff_Maison_Neue mb-0'>lead-gen</p>
                            <p className=' fw-light ff_Maison_Neue fs_2lg pt-3'>Get Your Sales Team Ready for Digital Leads</p>
                            <p className='fw-normal fs_2sm ff_space_mono pb-2'>unlock substantial business growth by enhancing collaboration skills and digital marketing expertise</p>

                            <div className='d-flex  align-items-center pt-2 pt-sm-5 gap-2'>
                                <p className='ff_Maison_Neue fs_2sm fw-semibold mb-0'>Read More</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col lg={4} md={6}>
                    <div className=' position-relative'>
                        <img className='w-100 mt-5' src={building} alt="" />
                        <div className='guides_card position-absolute bottom-0 ms-3 me-3 mb-4'>
                            <p className=' text-uppercase fw-normal fs_2sm light_blue ff_Maison_Neue mb-0'>guides</p>
                            <p className=' fw-light ff_Maison_Neue fs_2lg pt-3'>How to Sell building Materials Online</p>
                            <p className='fw-normal fs_2sm ff_space_mono pb-1'>Explore how selling building materials online opens up wider audiences, efficient sales and insightful data,</p>

                            <div className='d-flex  align-items-center  pt-2 pt-sm-4 gap-2'>
                                <p className='ff_Maison_Neue fs_2sm fw-semibold mb-0'>Read More</p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
            <div className=''>

            </div>
        </div>
    )
}

export default Section6