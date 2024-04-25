import styles from "@/styles/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Copyright © 2024 Weblifix</h3>
        <div className={styles.social_media_links_container}>
          <div className={styles.social_media_icons}></div>
          <div className={styles.social_media_icons}></div>
          <div className={styles.social_media_icons}></div>
          <div className={styles.social_media_icons}></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
