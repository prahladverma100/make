import { useState, } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap'
import vido_img from "../assets/video/vido_img.mp4";
import brands from '../assets/image/png/brands.png'
import hero_squiggle from '../assets/image/png/hero_squiggle.png'



const Hero_section = () => {

  const open = () => {
    setShow(false)
  }
  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }


  return (
    <div className='hero_img'>
      <div className="d-flex justify-content-end align-items-center">
        <nav className="nav_width">
          <ul className={show ? "open" : ""} >
            <li>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="fs_2sm fw-medium ff_Maison_Neue text-black bg-transparent border-0">
                  How We Help
                </Dropdown.Toggle>

                <Dropdown.Menu >
                  <Dropdown.Item className="fs_2sm fw-medium ff_Maison_Neue" href="" onClick={open}>Feature</Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="" onClick={open}>Partner</Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" id='footer' href="" onClick={open}>Footer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" className="fs_2sm fw-medium ff_Maison_Neue  text-black bg-transparent border-0">
                  Who We Help
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="" onClick={open}>Marketing</Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="" onClick={open}>Satisfied </Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="" onClick={open}>Footer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="fs_2sm fw-medium ff_Maison_Neue  text-black bg-transparent border-0">
                  Why Venveo
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="#Actual" onClick={open}>Actual</Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="#From" onClick={open}>Learn From</Dropdown.Item>
                  <Dropdown.Item className="fs_2sm  fw-medium ff_Maison_Neue" href="#footr" onClick={open}>Footer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <p className=' className="fs_2sm  fw-bold ff_Maison_Neue mb-0 " '>Resources </p>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71285 10.2348C1.71285 5.65688 5.424 1.94573 10.0019 1.94573C14.5799 1.94573 18.291 5.65688 18.291 10.2348C18.291 14.8128 14.5799 18.5239 10.0019 18.5239C5.424 18.5239 1.71285 14.8128 1.71285 10.2348ZM10.0019 0.523926C4.63876 0.523926 0.291046 4.87164 0.291046 10.2348C0.291046 15.598 4.63876 19.9457 10.0019 19.9457C12.4422 19.9457 14.6722 19.0456 16.3781 17.5594L22.0019 23.1831C22.3924 23.5737 23.0256 23.5737 23.4161 23.1831C23.8066 22.7926 23.8066 22.1595 23.4161 21.7689L17.7443 16.0972C18.9798 14.4681 19.7128 12.4371 19.7128 10.2348C19.7128 4.87164 15.3651 0.523926 10.0019 0.523926Z" fill="black" />
                </svg>
              </a>

            </li>
            <li className="d-flex align-items-center">
              <button className="talkbtn fs_2sm fw-bold ff_Maison_Neue  ">
                Let’s Talk{" "}
                <span className="spn_white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="10" viewBox="0 0 29 10" fill="none">
                    <path d="M23.2793 1L27.2393 4.96L23.2793 8.92" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                    <path d="M25.75 4.95996H1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
          <button
            className="open d-block d-lg-none navicon z_indexxx nav_icon fills position-relative fill-white p-4"
            onClick={() => {
              setShow(!show)
            }}>{show ? <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}

          </button>
        </nav>
      </div>
      <div className='pt-0 pt-lg-5'>
        <Container className='pt-4'>
          <div>
            <div className='d-flex justify-content-center position-relative'>
              <h1 className='fs_2xxl mx-width text-white fw-bold text-center ff_sohne_schmal line-height text-uppercase'>Make marketing
                a growth machine</h1>
              <div className=' position-absolute hero_img'>
                <img src={hero_squiggle} alt="" />
              </div>
            </div>

            <div className=' text-center d-flex justify-content-center'>
              <p className=' fw-light ff_Maison_Neue fs_lg text-white max_width'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
            </div>
            <div className='d-flex justify-content-center '>

              <div className='input_box d-flex pt-3 pb-3'>

                <input className='fw-normal ff_primary fs_xs text-white border-0' type="text" id="fname" placeholder="Enter Your Website" />
                <p className='ff_primary fw-semi-bold text-white fs_xs mb-0'>Analyze </p>

              </div>
            </div>
            <div className='d-flex justify-content-center position-relative trasfrom'>
              <video className='w-75' loop muted
                autoPlay
                src={vido_img}
              ></video>
              <div className=' position-absolute img_pos'>
                <img src={brands} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div >
  )
}

export default Hero_section