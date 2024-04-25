import styles from "@/styles/services.module.css";
import ServiceSlider from "./slider";

function services() {
  return (
    <>
      <section className={styles.service_section} id="service">
        <h1>What We Provide</h1>
        <div className={styles.service_box_container}>
          <div className={styles.service_box_area}>
            <ServiceSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default services;
