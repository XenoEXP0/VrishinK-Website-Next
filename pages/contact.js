import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - VrishinK Website</title>
          <meta property="og:title" content="Contact - VrishinK Website" />
        </Head>
        <header data-thq="thq-navbar" className="contact-navbar-interactive">
          <div className="contact-container1">
            <div
              data-thq="thq-navbar-nav"
              className="contact-desktop-menu"
            ></div>
          </div>
          <h1 className="contact-text">
            <span className="contact-text01">Erica</span>
            <span> Dome Of Journeys</span>
          </h1>
          <nav className="contact-links">
            <Link href="/">
              <a className="contact-link">Home</a>
            </Link>
            <Link href="/destinations">
              <a className="contact-link1">Destinations</a>
            </Link>
            <Link href="/about">
              <a className="contact-link2">About </a>
            </Link>
            <Link href="/contact">
              <a className="contact-link3">Contact</a>
            </Link>
            <Link href="/faq">
              <a className="contact-link4">FAQ</a>
            </Link>
          </nav>
          <div data-thq="thq-burger-menu" className="contact-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="contact-logo"
                />
                <div data-thq="thq-close-menu" className="contact-close-menu">
                  <svg viewBox="0 0 1024 1024" className="contact-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="contact-links1">
                <span className="contact-text03">About</span>
                <span className="contact-text04">Features</span>
                <span className="contact-text05">Pricing</span>
                <span className="contact-text06">Team</span>
                <span className="contact-text07">Blog</span>
              </nav>
              <div className="contact-buttons">
                <button className="contact-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon2"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon4"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon6"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="contact-image"
        />
        <div className="contact-container2">
          <h1 className="contact-text08">MEET US Here</h1>
          <span className="contact-text09">
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
            <span>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </span>
            <br></br>
          </span>
        </div>
        <div className="contact-container3">
          <h1 className="contact-text24">Contact Here</h1>
          <span className="contact-text25">
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="https://cdn1.vectorstock.com/i/1000x1000/79/05/map-pin-icon-with-you-are-here-vector-30197905.jpg"
          className="contact-image1"
        />
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #74d1fd;
          }
          .contact-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .contact-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .contact-text {
            font-family: 'AnandaBlackPersonalUse-Regular';
          }
          .contact-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-link {
            text-decoration: none;
          }
          .contact-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-burger-menu {
            display: none;
          }
          .contact-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .contact-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .contact-logo {
            height: 2rem;
          }
          .contact-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
          .contact-container2 {
            left: 474px;
            width: 788px;
            bottom: 9px;
            height: 484px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 5px;
          }
          .contact-text08 {
            top: 20px;
            left: 43px;
            position: absolute;
            text-decoration: underline;
          }
          .contact-text09 {
            top: 85px;
            left: 31px;
            position: absolute;
          }
          .contact-container3 {
            right: 7px;
            width: 647px;
            bottom: 0px;
            height: 490px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 5px;
            justify-content: flex-start;
          }
          .contact-text24 {
            top: 20px;
            left: 43px;
            position: absolute;
            text-decoration: underline;
          }
          .contact-text25 {
            top: 67px;
            left: 4px;
            position: absolute;
          }
          .contact-image1 {
            top: 506px;
            left: -1px;
            width: 472px;
            height: 499px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .contact-navbar-interactive {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-bottom-width: 2px;
            }
            .contact-link {
              font-size: 28px;
            }
            .contact-link1 {
              font-size: 28px;
            }
            .contact-link2 {
              font-size: 28px;
            }
            .contact-link3 {
              font-size: 28px;
            }
            .contact-link4 {
              font-size: 28px;
            }
            .contact-container3 {
              width: 328px;
            }
            .contact-text25 {
              top: 79px;
              left: 30px;
            }
          }
          @media (max-width: 1200px) {
            .contact-navbar-interactive {
              height: 160px;
              border-color: var(--dl-color-gray-black);
              border-width: 1.6px;
            }
            .contact-container1 {
              border-color: var(--dl-color-gray-black);
              border-style: solid;
              border-width: 2px;
            }
            .contact-text {
              font-size: 2.5em;
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .contact-text01 {
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .contact-link {
              font-size: 27px;
              font-family: Oxygen;
            }
            .contact-link1 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .contact-link2 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .contact-link3 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .contact-link4 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .contact-container2 {
              width: 792px;
              height: 424px;
            }
          }
          @media (max-width: 991px) {
            .contact-navbar-interactive {
              position: relative;
            }
            .contact-desktop-menu {
              display: none;
            }
            .contact-burger-menu {
              height: auto;
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .contact-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .contact-text03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text04 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .contact-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .contact-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
