import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>VrishinK Website</title>
          <meta property="og:title" content="VrishinK Website" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container1">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu"></div>
          </div>
          <h1 className="home-text">
            <span className="home-text01">Erica</span>
            <span> Dome Of Journeys</span>
          </h1>
          <nav className="home-links">
            <Link href="/">
              <a className="home-link">Home</a>
            </Link>
            <Link href="/destinations">
              <a className="home-link1">Destinations</a>
            </Link>
            <Link href="/about">
              <a className="home-link2">About </a>
            </Link>
            <Link href="/contact">
              <a className="home-link3">Contact</a>
            </Link>
            <Link href="/faq">
              <a className="home-link4">FAQ</a>
            </Link>
          </nav>
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-text03">About</span>
                <span className="home-text04">Features</span>
                <span className="home-text05">Pricing</span>
                <span className="home-text06">Team</span>
                <span className="home-text07">Blog</span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="home-image"
        />
        <div className="home-container2">
          <h1 className="home-text08">Featured In the Blog </h1>
        </div>
        <div className="home-container3">
          <div className="home-gallery-card">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image1"
            />
            <h2 className="home-text09">
              <span>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
              <br></br>
            </h2>
            <span className="home-text12">Learn more</span>
          </div>
          <div className="home-gallery-card1">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image2"
            />
            <h2 className="home-text13">
              <span>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
              <br></br>
            </h2>
            <span className="home-text16">
              <span>Learn More</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-gallery-card2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image3"
            />
            <h2 className="home-text20">
              <span>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
              <br></br>
            </h2>
            <span className="home-text23">Learn More</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #74d1fd;
            border-bottom-width: 4px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-text {
            font-family: 'AnandaBlackPersonalUse-Regular';
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 2rem;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-image {
            width: 100%;
            height: 756px;
            object-fit: cover;
          }
          .home-container2 {
            width: 100%;
            height: 184px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text08 {
            font-size: 120px;
            font-family: 'Ananda2';
            text-decoration: underline;
          }
          .home-container3 {
            width: 100%;
            height: 840px;
            display: flex;
            align-items: flex-start;
          }
          .home-gallery-card {
            width: 692px;
            height: 703px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-right-width: 2px;
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-text09 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text12 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }
          .home-gallery-card1 {
            width: 692px;
            height: 707px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-right-width: 2px;
          }
          .home-image2 {
            width: 100%;
            height: 632px;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-right-width: 2px;
          }
          .home-text13 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text16 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }
          .home-gallery-card2 {
            width: 692px;
            height: 707px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-right-width: 2px;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-text20 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }
          @media (max-width: 1600px) {
            .home-navbar-interactive {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-bottom-width: 3px;
            }
            .home-link {
              font-size: 28px;
            }
            .home-link1 {
              font-size: 28px;
            }
            .home-link2 {
              font-size: 28px;
            }
            .home-link3 {
              font-size: 28px;
            }
            .home-link4 {
              font-size: 28px;
            }
            .home-image {
              width: 100%;
              height: 618px;
            }
          }
          @media (max-width: 1200px) {
            .home-navbar-interactive {
              height: 160px;
              border-color: var(--dl-color-gray-black);
              border-width: 1.6px;
            }
            .home-container1 {
              border-color: var(--dl-color-gray-black);
              border-style: solid;
              border-width: 2px;
            }
            .home-text {
              font-size: 2.5em;
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .home-text01 {
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .home-link {
              font-size: 27px;
              font-family: Oxygen;
            }
            .home-link1 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .home-link2 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .home-link3 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .home-link4 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .home-image {
              width: 100%;
              height: 465px;
            }
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              position: relative;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              height: auto;
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text04 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-gallery-card {
              flex-direction: column;
            }
            .home-gallery-card1 {
              flex-direction: column;
            }
            .home-gallery-card2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-image1 {
              height: 10rem;
            }
            .home-image2 {
              height: 10rem;
            }
            .home-image3 {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
