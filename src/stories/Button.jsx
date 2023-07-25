import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  

  
  
  const imgages = [
    {
    "id": "102",
    "author": "Ben Moore",
    "width": 4320,
    "height": 3240,
    "url": "https://unsplash.com/photos/pJILiyPdrXI",
    "download_url": "https://picsum.photos/id/102/4320/3240"
  },
  {
    "id": "103",
    "author": "Ilham Rahmansyah",
    "width": 2592,
    "height": 1936,
    "url": "https://unsplash.com/photos/DwTZwZYi9Ww",
    "download_url": "https://picsum.photos/id/103/2592/1936"
  },
  {
    "id": "104",
    "author": "Dyaa Eldin",
    "width": 3840,
    "height": 2160,
    "url": "https://unsplash.com/photos/2fl-ocJ5MOA",
    "download_url": "https://picsum.photos/id/104/3840/2160"
  },
  {
    "id": "106",
    "author": "Arvee Marie",
    "width": 2592,
    "height": 1728,
    "url": "https://unsplash.com/photos/YnfGtpt2gf4",
    "download_url": "https://picsum.photos/id/106/2592/1728"
    },
  {"id": "115",
    "author": "Christian Hebell",
    "width": 1500,
    "height": 1000,
    "url": "https://unsplash.com/photos/A6S-q3D67Ss",
    "download_url": "https://picsum.photos/id/115/1500/1000"
  },
  {
    "id": "116",
    "author": "Anton Sulsky",
    "width": 3504,
    "height": 2336,
    "url": "https://unsplash.com/photos/YcfCXxo7rpc",
    "download_url": "https://picsum.photos/id/116/3504/2336"
  },
  ]
  return (
    <>
    <button
      type="button"
      className={['m-12 flex text-indigo-800 md:text-green-600 outline outline-purple-500 align-baseline','storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      </button>
      <div>
        <h1>React carousel images test :</h1>
        <Carousel className='carouselimg' autoPlay infiniteLoop centerMode
          interval={1000}
        width={450}>
        {
          imgages.map(image => <img src={image.download_url} alt=
        {image.author} />)
                }
        </Carousel>
        </div>
      </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};










// import React from 'react';
// import PropTypes from 'prop-types';
// import './button.css';

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['m-12 outline outline-green-500','storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
