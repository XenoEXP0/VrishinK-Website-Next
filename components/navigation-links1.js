import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.text}</span>
        <span className="navigation-links1-text1">{props.text1}</span>
        <span className="navigation-links1-text2">{props.text2}</span>
        <span className="navigation-links1-text3">{props.text3}</span>
        <span className="navigation-links1-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text4 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text3: 'Team',
  text2: 'Pricing',
  rootClassName: '',
  text1: 'Features',
  text4: 'Blog',
  text: 'About',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
