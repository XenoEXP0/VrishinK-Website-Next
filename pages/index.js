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
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon06">
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
              src="data:image/jpeg;base64,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"
              className="home-image1"
            />
            <h2 className="home-text09">Bridge eye View of Macau</h2>
            <span className="home-text10">Learn more</span>
          </div>
          <div className="home-gallery-card1">
            <img
              alt="image"
              src="data:image/jpeg;base64,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"
              className="home-image2"
            />
            <h2 className="home-text11">
              <span>Hangout in Hong Kong with My friends</span>
              <br></br>
            </h2>
            <span className="home-text14">
              <span>Learn More</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-gallery-card2">
            <img
              alt="image"
              src="https://static01.nyt.com/images/2017/03/28/nyregion/28XP-GIRL-01p/28XP-GIRL-01p-superJumbo.jpg"
              className="home-image3"
            />
            <h2 className="home-text18">A Statue in Japan</h2>
            <span className="home-text19">Learn More</span>
          </div>
        </div>
        <footer className="home-footer">
          <span className="home-text20">
            All Rights Reserver to Vrishin Copyright Infringement
          </span>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
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
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
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
          .home-text10 {
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
          .home-text11 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text14 {
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
          .home-text18 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text19 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
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
            .home-text09 {
              font-weight: 600;
            }
            .home-text11 {
              font-weight: 600;
            }
            .home-text18 {
              font-weight: 600;
            }
            .home-footer {
              width: 1452px;
              height: 105px;
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
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text20 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
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
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text20 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
