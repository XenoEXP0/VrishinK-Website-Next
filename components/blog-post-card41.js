import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard41 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card41-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Macau-1006756141-1440x823.jpg"
          className="blog-post-card41-image"
        />
        <div className="blog-post-card41-container">
          <span className="blog-post-card41-text">{props.date}</span>
          <span className="blog-post-card41-text1">{props.description}</span>
          <div className="blog-post-card41-separator"></div>
          <span className="blog-post-card41-text2">{props.label}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card41-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card41-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card41-image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .blog-post-card41-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card41-text {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-card41-text1 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
          }
          .blog-post-card41-separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-card41-text2 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .blog-post-card41-root-class-name {
            margin-bottom: 64px;
          }

          .blog-post-card41-root-class-name2 {
            margin-bottom: 48px;
          }
        `}
      </style>
    </>
  )
}

BlogPostCard41.defaultProps = {
  label: '',
  rootClassName: '',
  description: 'Macau World Trip',
  imageAlt: 'image',
  date: 'Feb 29',
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard41.propTypes = {
  label: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BlogPostCard41
