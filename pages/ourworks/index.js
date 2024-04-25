import styles from "@/styles/ourworks.module.css";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "@/pages/Components/Footer/footer";
import WebIntro from "@/pages/Components/WebIntro/intro";
import TempMocImage2 from "@/public/moc2.webp";
import TempMocImage3 from "@/public/moc3.jpg";
import TempMocImage4 from "@/public/moc4.jpg";
import TempMocImage5 from "@/public/moc5.jpg";

function OurWorks() {
  return (
    <>
      <WebIntro sectionName="Masterpice" />
      <section className={styles.our_works_page}>
        <h1>Our Works</h1>
        <div className={styles.our_works_area}>
          <div className={styles.our_works_container}>
            <div className={styles.cards}>
              <Image
                className={styles.card_image}
                alt="work_showcase_image"
                src={TempMocImage3}
              ></Image>
              <div className={styles.card_footer}>
                <div>
                  <h2>Ollar Media</h2>
                  <p>Design & Development</p>
                </div>
                <div>
                  <FaExternalLinkAlt className={styles.card_icon} />
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <Image
                className={styles.card_image}
                alt="work_showcase_image"
                src={TempMocImage4}
              ></Image>
              <div className={styles.card_footer}>
                <div>
                  <h2>Ollar Media</h2>
                  <p>Design & Development</p>
                </div>
                <div>
                  <FaExternalLinkAlt className={styles.card_icon} />
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <Image
                className={styles.card_image}
                alt="work_showcase_image"
                src={TempMocImage5}
              ></Image>
              <div className={styles.card_footer}>
                <div>
                  <h2>Ollar Media</h2>
                  <p>Design & Development</p>
                </div>
                <div>
                  <FaExternalLinkAlt className={styles.card_icon} />
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <Image
                className={styles.card_image}
                alt="work_showcase_image"
                src={TempMocImage2}
              ></Image>
              <div className={styles.card_footer}>
                <div>
                  <h2>Ollar Media</h2>
                  <p>Design & Development</p>
                </div>
                <div>
                  <FaExternalLinkAlt className={styles.card_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default OurWorks;
