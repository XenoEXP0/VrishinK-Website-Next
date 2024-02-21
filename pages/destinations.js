import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard41 from '../components/blog-post-card41'

const Destinations = (props) => {
  return (
    <>
      <div className="destinations-container">
        <Head>
          <title>Destinations - VrishinK Website</title>
          <meta property="og:title" content="Destinations - VrishinK Website" />
        </Head>
        <header
          data-thq="thq-navbar"
          className="destinations-navbar-interactive"
        >
          <div className="destinations-container1">
            <div
              data-thq="thq-navbar-nav"
              className="destinations-desktop-menu"
            ></div>
          </div>
          <h1 className="destinations-text">
            <span className="destinations-text1">Erica</span>
            <span> Dome Of Journeys</span>
          </h1>
          <nav className="destinations-links">
            <Link href="/">
              <a className="destinations-link">Home</a>
            </Link>
            <Link href="/destinations">
              <a className="destinations-link1">Destinations</a>
            </Link>
            <Link href="/about">
              <a className="destinations-link2">About </a>
            </Link>
            <Link href="/contact">
              <a className="destinations-link3">Contact</a>
            </Link>
            <Link href="/faq">
              <a className="destinations-link4">FAQ</a>
            </Link>
          </nav>
          <div
            data-thq="thq-burger-menu"
            className="destinations-burger-menu"
          ></div>
          <div data-thq="thq-mobile-menu" className="destinations-mobile-menu">
            <div className="destinations-nav">
              <div className="destinations-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="destinations-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="destinations-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="destinations-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="destinations-links1">
                <span className="destinations-text3">About</span>
                <span className="destinations-text4">Features</span>
                <span className="destinations-text5">Pricing</span>
                <span className="destinations-text6">Team</span>
                <span className="destinations-text7">Blog</span>
              </nav>
              <div className="destinations-buttons">
                <button className="destinations-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="destinations-icon2"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="destinations-icon4"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="destinations-icon6"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="destinations-blog">
          <BlogPostCard41
            label="Business &amp; Travel"
            rootClassName="rootClassName1"
          ></BlogPostCard41>
          <div className="destinations-container2">
            <BlogPostCard41
              label="Nature"
              rootClassName="rootClassName2"
            ></BlogPostCard41>
            <BlogPostCard41 rootClassName="rootClassName3"></BlogPostCard41>
          </div>
          <BlogPostCard41 rootClassName="rootClassName4"></BlogPostCard41>
        </div>
      </div>
      <style jsx>
        {`
          .destinations-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .destinations-navbar-interactive {
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
          .destinations-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .destinations-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .destinations-text {
            font-family: 'AnandaBlackPersonalUse-Regular';
          }
          .destinations-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .destinations-link {
            text-decoration: none;
          }
          .destinations-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .destinations-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .destinations-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .destinations-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .destinations-burger-menu {
            display: none;
          }
          .destinations-mobile-menu {
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
          .destinations-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .destinations-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .destinations-logo {
            height: 2rem;
          }
          .destinations-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .destinations-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .destinations-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .destinations-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .destinations-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .destinations-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .destinations-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .destinations-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .destinations-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .destinations-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .destinations-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .destinations-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .destinations-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .destinations-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .destinations-container2 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 1600px) {
            .destinations-container {
              border-color: #00b0ff;
              border-width: 10px;
              background-size: cover;
              background-image: url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg');
            }
            .destinations-navbar-interactive {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              background-color: #ffffff;
              border-bottom-width: 2px;
            }
            .destinations-link {
              font-size: 28px;
            }
            .destinations-link1 {
              font-size: 28px;
            }
            .destinations-link2 {
              font-size: 28px;
            }
            .destinations-link3 {
              font-size: 28px;
            }
            .destinations-link4 {
              font-size: 28px;
            }
          }
          @media (max-width: 1200px) {
            .destinations-container {
              background-image: url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg');
            }
            .destinations-navbar-interactive {
              height: 160px;
              border-color: var(--dl-color-gray-black);
              border-width: 1.6px;
            }
            .destinations-container1 {
              border-color: var(--dl-color-gray-black);
              border-style: solid;
              border-width: 2px;
            }
            .destinations-text {
              font-size: 2.5em;
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .destinations-text1 {
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .destinations-link {
              font-size: 27px;
              font-family: Oxygen;
            }
            .destinations-link1 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .destinations-link2 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .destinations-link3 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .destinations-link4 {
              font-size: 27px;
              font-family: Oxygen;
            }
          }
          @media (max-width: 991px) {
            .destinations-navbar-interactive {
              position: relative;
            }
            .destinations-desktop-menu {
              display: none;
            }
            .destinations-burger-menu {
              height: auto;
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .destinations-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .destinations-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .destinations-text3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .destinations-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .destinations-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .destinations-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .destinations-text7 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .destinations-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .destinations-container2 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .destinations-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .destinations-mobile-menu {
              padding: 16px;
            }
            .destinations-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Destinations
