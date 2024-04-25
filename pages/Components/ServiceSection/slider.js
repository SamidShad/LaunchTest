import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import styles from "@/styles/services.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import examplePng from "../../../public/code.svg";
import { breakpoint } from "@/lib/sliderBreakPoints";

function slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={-100}
        breakpoints={breakpoint}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.service_cards_area}>
            <div className={styles.service_cards}>
              <Image className={styles.card_icon} src={examplePng}></Image>
              <h1>Web Dev's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                sunt enim quaerat quis quae, facere facilis laudantium excepturi
                soluta sit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.service_cards_area}>
            <div className={styles.service_cards}>
              <Image className={styles.card_icon} src={examplePng}></Image>
              <h1>Web Dev's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                sunt enim quaerat quis quae, facere facilis laudantium excepturi
                soluta sit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.service_cards_area}>
            <div className={styles.service_cards}>
              <Image className={styles.card_icon} src={examplePng}></Image>
              <h1>Web Dev's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                sunt enim quaerat quis quae, facere facilis laudantium excepturi
                soluta sit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.service_cards_area}>
            <div className={styles.service_cards}>
              <Image className={styles.card_icon} src={examplePng}></Image>
              <h1>Web Dev's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                sunt enim quaerat quis quae, facere facilis laudantium excepturi
                soluta sit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.service_cards_area}>
            <div className={styles.service_cards}>
              <Image className={styles.card_icon} src={examplePng}></Image>
              <h1>Web Dev's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                sunt enim quaerat quis quae, facere facilis laudantium excepturi
                soluta sit.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default slider;
