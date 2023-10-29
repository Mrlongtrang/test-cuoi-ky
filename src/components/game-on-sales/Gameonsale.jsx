import React from 'react';
import './gameonsale.css';

const Gameonsale = () => {
  return (
    <section className="sales">
      <h3 style={{ color: 'white' }}>Games On Sale - </h3>

      <ul className="saleslist">
        {/* Logic gắn các tựa game vào */}

        {/* {newsData.slice(5, 10).map((game) => (
                    <li key={game._id} className={styles.card}>

                        <a href={'https://www.epicgames.com/store/en-US' + game.url}>
                            <img src={game._images_[0]} alt="sales game" />

                            <div className={styles.cardText}>
                                <p>{getTitle(game)}<br /><span className={styles.author}>{game.author ? game.author : 'Game Author'}</span></p>
                                <span className={styles.pricetag}>-25%</span><span className={styles.oldprice}>50 $</span> 37 $
                            </div>

                        </a>
                    </li>
                ))} */}

        <li className="card">
          <a href="">
            <img src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854" />
            <p>
              {' '}
              GAME TITLE <br /> <span className="author"> </span>{' '}
            </p>
            <span className="pricetag"> -25% </span>
            <span className="oldprice"> $50</span> $37
          </a>
        </li>
        <li className="card">
          <a href="">
            <img src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854" />
            <p>
              {' '}
              GAME TITLE <br /> <span className="author"> </span>{' '}
            </p>
            <span className="pricetag"> -25% </span>
            <span className="oldprice"> $50</span> $37
          </a>
        </li>
        <li className="card">
          <a href="">
            <img src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854" />
            <p>
              {' '}
              GAME TITLE <br /> <span className="author"> </span>{' '}
            </p>
            <span className="pricetag"> -25% </span>
            <span className="oldprice"> $50</span> $37
          </a>
        </li>
        <li className="card">
          <a href="">
            <img src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854" />
            <p>
              {' '}
              GAME TITLE <br /> <span className="author"> </span>{' '}
            </p>
            <span className="pricetag"> -25% </span>
            <span className="oldprice"> $50</span> $37
          </a>
        </li>
        <li className="card">
          <a href="">
            <img src="https://cdn2.unrealengine.com/egs-ghostrunner-2-carousel-desktop-1920x1080-605bef2cc0f8.jpg?h=480&quality=medium&resize=1&w=854" />
            <p>
              {' '}
              GAME TITLE <br /> <span className="author"> </span>{' '}
            </p>
            <span className="pricetag"> -25% </span>
            <span className="oldprice"> $50</span> $37
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Gameonsale;
