import styles from "@/styles/home.module.css";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";

const TEXTS = ["Design", "Development", "SEO"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section className={styles.home_section} id="home">
        <div className={styles.home_section_area}>
          <div className={styles.home_section_container}>
            <div className={styles.home_section_text_container}>
              <h1>We Create</h1>
              <h1>Solutions</h1>
              <div className={styles.pop_up_text_container}>
                <span>Don't worry about</span>
                <span>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </span>
              </div>
              <Link href="/contact">
                <button className={`btn ${styles.home_section_btn}`}>
                  Start a project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
