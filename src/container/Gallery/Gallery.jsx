import React, { useState, useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort, BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images, bathroom } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const redirectToInstagram = () => {
    const InstagramLink = 'https://instagram.com/serenity_space_luxury_homes?igshid=MzRlODBiNWFlZA==';
    window.open(InstagramLink);
  };

  const scrollRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handlePlayClick = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__gallery flex__center" style={{ marginBottom: '-2' }}>
      <div className="app__gallery-content" style={{margin: '24rem 0 '}}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__opensans" >Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#D9CCC5', marginTop: '0rem' }}>
          Check out our Instagram to see more of what our properties have to offer!
        </p>
        <button type="button" className="custom__button" onClick={redirectToInstagram}>
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          <div className="app__gallery-images_card flex__center" key={`gallery_image-1`}>
            <div className="app__video">
              <video
                ref={vidRef}
                src={bathroom}
                type="video/mp4"
                loop
                controls={false}
                muted
                onClick={handlePlayClick}
              />
              <div className={`app__video-overlay flex__center ${playVideo ? 'hide' : ''}`}>
                <div className="app__video-overlay_circle flex__center" onClick={handlePlayClick}>
                  {!playVideo ? (
                    <BsFillPlayFill color="#fff" fontSize={30} />
                  ) : (
                    <BsPauseFill color="#fff" fontSize={30} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {[images.fbathroom, images.bath1, images.bath4,images.masterbedroom,images.ensuite,images.hallway,images.doublebedroom,images.largesinglebedroom,images.livingroom,images.kitchen,images.garden].map(
            (image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 2}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            )
          )}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
