import styles from "../styles/Hero.module.scss";

// import Swiper core and required modules
import { Pagination, A11y, Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../public/slide1.jpg";
import slide2 from "../public/slide2.jpg";
import slide3 from "../public/slide3.jpg";
import slide from "../public/slide.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 300500, disableOnInteraction: false }}
        effect="fade"
        className={styles.swipe}
      >
        <SwiperSlide>
          <div className={styles.slide1}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_title}>Welcome to crypto diary</h2>
              <p className={styles.slide_subtitle}>
                Get the latest Cryptocurrency update from the right source. Take
                a look at the prices, market cap, history and details all in one
                place.
              </p>
              <a href="#" className={styles.details_link}>
                <span>Details</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide2}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_title}>Top Stories on Crypto</h2>
              <p className={styles.slide_subtitle}>
                Get hourly news updates on all your favourites cryptocurrencies
                as well as others that also matter.
              </p>
              <a href="#" className={styles.details_link}>
                <span>Details</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide3}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_title}>Know Your Exchanges</h2>
              <p className={styles.slide_subtitle}>
                Get to know about the list of cryptocurency agencies currently
                operating across the globe.
              </p>
              <a href="#" className={styles.details_link}>
                <span>Details</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
