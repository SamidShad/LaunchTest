import { webIntroAnimation } from "@/lib/animation";
import styles from "@/styles/intro.module.css";
import { motion } from "framer-motion";

function Intro({ sectionName }) {
  return (
    <>
      <motion.div
        variants={webIntroAnimation}
        initial="initial"
        animate="visible"
        className={styles.web_intro}
      >
        <h1>{sectionName}</h1>
      </motion.div>
    </>
  );
}

export default Intro;
