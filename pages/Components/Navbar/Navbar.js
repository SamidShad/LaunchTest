import {
  full_screen_menu_animation,
  full_screen_menu_links_animation,
} from "@/lib/animation";
import styles from "@/styles/navbar.module.css";
import { Pivot as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function MenuFunc() {
    setOpen(!isOpen);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <h1>Weblifix</h1>
        <div className={styles.menu_btn}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={full_screen_menu_animation}
            initial="initial"
            animate="visible"
            exit="exit"
            className={styles.fullscreen_menu}
          >
            <div className={styles.nav_area}></div>
            <motion.div
              variants={full_screen_menu_links_animation}
              initial="initial"
              animate="visible"
              exit="exit"
              className={styles.menu_links}
            >
              <ul>
                <Link href="/#home">
                  <li onClick={MenuFunc}>Home</li>
                </Link>
                <Link href="/#about">
                  <li onClick={MenuFunc}>About us</li>
                </Link>
                <Link href="/ourworks">
                  <li onClick={MenuFunc}>Our Works</li>
                </Link>
                <Link href="/#service">
                  <li onClick={MenuFunc}>Services</li>
                </Link>
                <Link href="/contact">
                  <li onClick={MenuFunc}>Contact</li>
                </Link>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
