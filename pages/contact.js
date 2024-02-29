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
          src="data:image/png;base64,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"
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
