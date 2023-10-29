import React from 'react';
import './Slider.css';

const MainSlider = () => {
  // Đặt URL hình ảnh trực tiếp mốt phát triển sau
  const backgroundImageUrl =
    'url("https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854")';

  return (
    <div className="sliderWrapper">
      <div className="featured" style={{ backgroundImage: backgroundImageUrl }}>
        <div className="itemText">
          <h3 className="title"> GAME TITLE </h3>
          <p>Last change for Pre-purchase</p>
          <div className="buttons">
            <a href="#!" className="btn btnDownload">
              {' '}
              DOWNLOAD NOW{' '}
            </a>
            <a href="#!" className="btn btnWishlist">
              {' '}
              ADD TO WHISHLIST{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="gamelist">
        {/* <li key={game._id} onClick={onClick} style={{ display: 'block' }} >
                        <div id={index} className={`${styles.game} ${index === counter ? styles.current : ''}`}>
                            <img src={game._images_[0]} alt="game" />
                       { game.title.split(' ').slice(0, 4).join(' ') }...
                        </div>
                    </li> */}
        <li>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
          <div className="game">
            <img
              src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854"
              alt=""
            />
            <h4> GAME TITLE </h4>
          </div>
        </li>
      </div>
    </div>
  );
};

export default MainSlider;
