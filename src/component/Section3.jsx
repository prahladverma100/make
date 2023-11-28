import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import yellow_line from '../assets/image/png/yellow_line.png'

const Section3 = () => {
    return (
        <div className=' position-relative z-1'>
            <div className=' position-absolute card_line  w-100 '>
                <img className='W-100 z-1' src={yellow_line} alt="" />
            </div>
            <Container className='pb-5 '>
                <p className=' fw-light fs_2lg ff_Maison_Neue text-center mb-0 pt-0 pt-lg-5 mt-5'>Problems we solve.</p>
                <div className='d-flex justify-content-center'>
                    <h2 className='text-center ff_sohne_schmal fw-bold fs_xxl text-uppercase mx_width'>Digital Marketing
                        for today’s Business</h2>

                </div>
                <div className=' text-center
                 d-flex justify-content-center'>
                    <p className='ff_space_mono fw-normal fs_2sm text_width pb-2 pb-lg-4'>We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.</p>
                </div>

                <Row className=' d-flex justify-content-center'>
                    <Col lg={6} className=' d-flex justify-content-center'>
                        <div className='markting_card mt-3 mt-lg-5'>
                            <div className='d-flex'>
                                <div className='icon_svg'>
                                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.5017 13.2492C26.5017 5.93119 32.4329 0 39.7509 0C47.0688 0 53 5.93119 53 13.2492C53 20.5671 47.0688 26.4983 39.7509 26.4983C32.4329 26.4983 26.5017 20.5671 26.5017 13.2492ZM26.5017 13.2492C26.5017 5.93119 20.5671 0 13.2492 0C5.93119 0 0 5.93119 0 13.2492C0 20.5671 5.93119 26.4983 13.2492 26.4983C20.5671 26.4983 26.4983 20.5671 26.4983 13.2492H26.5017ZM13.2526 26.4983C5.93119 26.5017 0 32.4329 0 39.7509C0 47.0688 5.93119 53 13.2492 53C20.5671 53 26.4983 47.0688 26.4983 39.7509C26.4983 32.4329 20.5671 26.5017 13.2492 26.5017L13.2526 26.4983ZM39.7542 26.4983C32.4363 26.4983 26.5051 32.4295 26.5051 39.7475C26.5051 47.0654 32.4363 52.9966 39.7542 52.9966C47.0722 52.9966 53.0034 47.0654 53.0034 39.7475C53.0034 32.4295 47.0722 26.4983 39.7542 26.4983Z" fill="#00999E" />
                                    </svg>

                                </div>
                                <div className='ps-3'>
                                    <h6 className=' fw-light ff_Maison_Neue fs_2lg'>My website isn’t getting enough traffic</h6>
                                    <p className=' fw-medium ff_space_mono fs_2sm'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Boost your presence in search results </li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Capture targeted site traffic</li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '> Turn site visitors into customers</li>
                                    </ul>
                                    <div className='d-flex  align-items-center gap-2'>
                                        <p className=' fw-semibold ff_Maison_Neue fs_2sm  mb-0'>Explore SEO Services</p>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className=' d-flex justify-content-center'>
                        <div className='markting_card mt-3 mt-lg-5'>
                            <div className='d-flex'>
                                <div className='icon_svg'>
                                    <svg width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50.9951 0H24.4199C23.3168 0 22.415 0.90177 22.415 2.00493V11.209H13.2109C12.1078 11.209 11.206 12.1108 11.206 13.2139V22.418H2.00493C0.90177 22.418 0 23.3198 0 24.4229V45.9632C0 47.0664 0.90177 47.9681 2.00493 47.9681H28.5801C29.6832 47.9681 30.585 47.0664 30.585 45.9632V36.7591H39.7891C40.8922 36.7591 41.794 35.8574 41.794 34.7542V25.5501H50.9981C52.1012 25.5501 53.003 24.6484 53.003 23.5452V2.00493C53.003 0.90177 52.1012 0 50.9981 0H50.9951Z" fill="#00999E" />
                                    </svg>

                                </div>
                                <div className='ps-3'>
                                    <h6 className=' fw-light ff_Maison_Neue fs_2lg'>My CPL from digital ad campaigns is too high</h6>
                                    <p className=' fw-medium ff_space_mono fs_2sm'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Refine ad targeting </li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Engage your audience where they browse online</li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '> Maximize paid ad budget</li>
                                    </ul>

                                    <div className='d-flex  align-items-center gap-2'>
                                        <p className=' fw-semibold ff_Maison_Neue fs_2sm  mb-0'>Explore SEO Services</p>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className=' d-flex justify-content-center'>
                        <div className='markting_card mt-3 mt-lg-5'>
                            <div className='d-flex'>
                                <div className='icon_svg'>
                                    <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32684 7.71056C9.14837 5.79345 11.5711 4.73709 14.1486 4.73709C16.7262 4.73709 19.1459 5.79345 20.9704 7.71056C22.7801 9.61563 23.7831 12.1467 23.795 14.8403V14.8884H28.2982V14.8403C28.3101 12.1467 29.3102 9.61563 31.1228 7.71056C32.9443 5.79345 35.3671 4.73709 37.9446 4.73709C40.5221 4.73709 42.9419 5.79345 44.7664 7.71056C46.5879 9.62767 47.591 12.1768 47.591 14.8884H52.0912C52.0912 12.878 51.7162 10.9278 50.9781 9.09196C50.2667 7.31931 49.2458 5.72724 47.9481 4.36089C46.6504 2.99454 45.1355 1.92012 43.4509 1.17073C41.7067 0.394256 39.8524 0 37.9446 0C36.0368 0 34.1825 0.394256 32.4383 1.17073C30.7537 1.92012 29.2417 2.99454 27.9411 4.36089C27.2238 5.1163 26.5928 5.94393 26.0481 6.83176C25.5064 5.94393 24.8754 5.1163 24.1551 4.36089C22.8575 2.99454 21.3425 1.92012 19.6579 1.17073C17.9137 0.394256 16.0595 0 14.1516 0C12.2438 0 10.3895 0.394256 8.64536 1.17073C6.96075 1.92012 5.44876 2.99454 4.14809 4.36089C2.8504 5.72724 1.82951 7.31931 1.11816 9.09196C0.380026 10.9278 0.00500488 12.881 0.00500488 14.8884H4.50525C4.50525 12.1768 5.50828 9.62767 7.32981 7.71056H7.32684ZM47.9392 20.2183C46.6415 18.852 45.1266 17.7775 43.4419 17.0282C41.6978 16.2517 39.8435 15.8574 37.9357 15.8574C36.0278 15.8574 34.1736 16.2517 32.4294 17.0282C30.7448 17.7775 29.2328 18.852 27.9322 20.2183C27.2149 20.9737 26.5839 21.8014 26.0392 22.6892C25.4975 21.8014 24.8665 20.9737 24.1462 20.2183C22.8485 18.852 21.3336 17.7775 19.649 17.0282C17.9048 16.2517 16.0506 15.8574 14.1427 15.8574C12.2349 15.8574 10.3806 16.2517 8.63645 17.0282C6.95183 17.7775 5.43985 18.852 4.13918 20.2183C2.84149 21.5847 1.8206 23.1767 1.10925 24.9494C0.371114 26.7852 -0.00390625 28.7385 -0.00390625 30.7458H4.49634C4.49634 28.0342 5.49937 25.4851 7.3209 23.568C9.14243 21.6509 11.5652 20.5945 14.1427 20.5945C16.7202 20.5945 19.14 21.6509 20.9645 23.568C22.7741 25.4731 23.7772 28.0041 23.7891 30.6977V30.7458H28.2923V30.6977C28.3042 28.0041 29.3043 25.4731 31.1169 23.568C32.9384 21.6509 35.3611 20.5945 37.9387 20.5945C40.5162 20.5945 42.936 21.6509 44.7605 23.568C46.585 25.4851 47.585 28.0342 47.585 30.7458H52.0853C52.0853 28.7354 51.7103 26.7852 50.9721 24.9494C50.2608 23.1767 49.2399 21.5847 47.9422 20.2183H47.9392ZM43.4419 32.8826C45.1266 33.632 46.6415 34.7065 47.9392 36.0728H47.9422C49.2399 37.4392 50.2608 39.0312 50.9721 40.8039C51.7103 42.6397 52.0853 44.5899 52.0853 46.6003H47.585C47.585 43.8887 46.582 41.3396 44.7605 39.4225C42.936 37.5054 40.5162 36.449 37.9387 36.449C35.3611 36.449 32.9384 37.5054 31.1169 39.4225C29.3043 41.3275 28.3042 43.8586 28.2923 46.5522V46.6003H23.7891V46.5522C23.7772 43.8586 22.7741 41.3275 20.9645 39.4225C19.14 37.5054 16.7202 36.449 14.1427 36.449C11.5652 36.449 9.14243 37.5054 7.3209 39.4225C5.49937 41.3396 4.49634 43.8887 4.49634 46.6003H-0.00390625C-0.00390625 44.5929 0.371114 42.6397 1.10925 40.8039C1.8206 39.0312 2.84149 37.4392 4.13918 36.0728C5.43985 34.7065 6.95183 33.632 8.63645 32.8826C10.3806 32.1062 12.2349 31.7119 14.1427 31.7119C16.0506 31.7119 17.9048 32.1062 19.649 32.8826C21.3336 33.632 22.8485 34.7065 24.1462 36.0728C24.8665 36.8282 25.4975 37.6558 26.0392 38.5437C26.5839 37.6558 27.2149 36.8282 27.9322 36.0728C29.2328 34.7065 30.7448 33.632 32.4294 32.8826C34.1736 32.1062 36.0278 31.7119 37.9357 31.7119C39.8435 31.7119 41.6978 32.1062 43.4419 32.8826Z" fill="#00999E" />
                                    </svg>

                                </div>
                                <div className='ps-3'>
                                    <h6 className=' fw-light ff_Maison_Neue fs_2lg'>My website isn’t getting enough traffic</h6>
                                    <p className=' fw-medium ff_space_mono fs_2sm'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Boost your presence in search results </li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Capture targeted site traffic</li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '> Turn site visitors into customers</li>
                                    </ul>
                                    <div className='d-flex  align-items-center gap-2'>
                                        <p className=' fw-semibold ff_Maison_Neue fs_2sm  mb-0'>Explore SEO Services</p>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className=' d-flex justify-content-center'>
                        <div className='markting_card mt-3 mt-lg-5'>
                            <div className='d-flex'>
                                <div className='icon_svg'>
                                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.8468 33.4154C51.8234 40.3919 54.92 48.6045 51.7639 51.7607C48.6078 54.9168 40.3952 51.8201 33.4186 44.8436C30.2228 41.6478 27.84 38.1909 26.5016 35.081C25.1631 38.1909 22.7803 41.6478 19.5845 44.8436C12.6079 51.8201 4.39537 54.9168 1.23924 51.7607C-1.9169 48.6045 1.17975 40.3919 8.1563 33.4154C11.3521 30.2196 14.809 27.8368 17.9189 26.4983C14.809 25.1599 11.3521 22.7771 8.1563 19.5813C1.17644 12.6047 -1.92021 4.39213 1.23593 1.23599C4.39207 -1.92015 12.6046 1.17651 19.5812 8.15306C22.777 11.3489 25.1598 14.8057 26.4983 17.9156C27.8367 14.8057 30.2195 11.3489 33.4153 8.15306C40.3919 1.17651 48.6078 -1.92015 51.7639 1.23599C54.92 4.39213 51.8234 12.6047 44.8468 19.5813C41.651 22.7771 38.1942 25.1599 35.0843 26.4983C38.1942 27.8368 41.651 30.2196 44.8468 33.4154Z" fill="#00999E" />
                                    </svg>

                                </div>
                                <div className='ps-3'>
                                    <h6 className=' fw-light ff_Maison_Neue fs_2lg'>My website isn’t getting enough traffic</h6>
                                    <p className=' fw-medium ff_space_mono fs_2sm'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Boost your presence in search results </li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '>Capture targeted site traffic</li>
                                        <li className='fw-semibold ff_Maison_Neue fs_2sm '> Turn site visitors into customers</li>
                                    </ul>
                                    <div className='d-flex  align-items-center gap-2'>
                                        <p className=' fw-semibold ff_Maison_Neue fs_2sm  mb-0'>Explore SEO Services</p>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div className='bg_img1 mt-0 mt-lg-5  pt-5 pb-5'>
                <Container>
                    <p className=' ff_space_mono fw-normal fs_2sm pt-5 mb-0 text-center text-md-start'>Get Your Custom Marketing Plan</p>
                    <div className='d-flex justify-content-between flex-column flex-md-row align-items-center '>
                        <h5 className=' ff_Maison_Neue fw-light fs_xl text-center text-md-start position-relative'>Start earning more money now</h5>
                        <div className=' position-absolute svg_icon d-none d-lg-block'>
                            <svg width="137" height="73" viewBox="0 0 137 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_1064)">
                                    <path d="M134.926 60.4452C134.904 56.7544 134.892 53.0533 134.871 49.3625C131.919 48.9536 127.465 48.1757 124.523 47.7765" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M134.926 60.4452C134.904 56.7544 134.892 53.0533 134.871 49.3625C131.919 48.9536 127.465 48.1757 124.523 47.7765" stroke="#00999E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M133.873 50.1803C118.382 68.1831 95.4611 74.6359 72.2373 63.9106C65.8639 60.9647 55.7617 54.4801 51.2039 48.8033C46.3349 42.7249 43.9906 34.9664 43.4162 27.5394C42.7993 19.6634 44.1393 11.6435 48.5949 5.96885C49.5132 4.80316 50.6333 3.70194 52.1175 3.47103C55.4942 2.93797 58.4844 6.90723 59.8719 10.4304C64.4548 22.1088 62.1624 35.5069 54.2606 43.1871C49.3207 47.9848 42.3644 50.397 35.1561 50.1952C28.5687 50.0163 22.2849 47.4181 17.1685 43.2572C12.4205 39.3963 5.52247 32.6535 1.62304 23.6373" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M133.873 50.1803C118.382 68.1831 95.4611 74.6359 72.2373 63.9106C65.8639 60.9647 55.7617 54.4801 51.2039 48.8033C46.3349 42.7249 43.9906 34.9664 43.4162 27.5394C42.7993 19.6634 44.1393 11.6435 48.5949 5.96885C49.5132 4.80316 50.6333 3.70194 52.1175 3.47103C55.4942 2.93797 58.4844 6.90723 59.8719 10.4304C64.4548 22.1088 62.1624 35.5069 54.2606 43.1871C49.3207 47.9848 42.3644 50.397 35.1561 50.1952C28.5687 50.0163 22.2849 47.4181 17.1685 43.2572C12.4205 39.3963 5.52247 32.6535 1.62304 23.6373" stroke="#00999E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1064">
                                        <rect width="134.51" height="68.86" fill="white" transform="translate(0.0786133 3.8623) rotate(-1.57591)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='input_box input1 d-flex pt-4 pb-4 bg-white'>
                            <input className='fw-normal ff_primary fs_xs text-black border-0' type="text" id="frame1" placeholder="Enter Your Website" />
                            <p className=' ff_Maison_Neue fw-semibold  text-black fs_xs mb-0 '>Submit </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Section3