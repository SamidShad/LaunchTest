import Image from "next/image";
import styles from "@/styles/cta.module.css";
import objectPNG from "../../../public/object.png";
import Link from "next/link";

function CTA() {
  return (
    <>
      <section className={styles.cta_section}>
        <div className={styles.cta_area}>
          <div className={styles.cta_section_container}>
            <div className={styles.section_text_container}>
              <h1>fixed your problem</h1>
              <div>
                <p>Available for new projects</p>
                <div className={styles.available_circle}></div>
              </div>
              <Link href="/contact">
                <button className={`btn ${styles.cta_section_btn}`}>
                  Contact
                </button>
              </Link>
            </div>
            <Image
              src={objectPNG}
              className={styles.section_object}
              alt="3D_Ball_Image"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
