import Footer from "@/pages/Components/Footer/footer";
import WebIntro from "@/pages/Components/WebIntro/intro";
import styles from "@/styles/contact.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmail from "validator/lib/isEmail";

function Contact() {
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    message: "",
    packages: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEmailDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function EmailSender() {
    const { name, email, message, package: packages } = emailDetails;

    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return;
    } else if (!isEmail(email)) {
      toast.error("Use a valid email address");
    } else if (!packages) {
      toast.error("Select your package");
    } else {
      name &&
        email &&
        packages &&
        message &&
        Email.send({
          SecureToken: process.env.NEXT_PUBLIC_CONTACT_KEY,
          To: process.env.NEXT_PUBLIC_TO_EMAIL,
          From: process.env.NEXT_PUBLIC_FROM_EMAIL,
          Subject: "Client's Message !!",
          Body: `
          <div
          style="
            background-color: black;
            padding: 10px;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
          "
        >
          <h1 style="margin: 10px; text-align: center; font-weight: bolder">
            WEBLIFIX
          </h1>
          <div
            style="
              font-weight: bold;
              padding: 10px;
              background-color: #222222;
              border: 1px solid white;
            "
          >
            <span style="margin: 10px; font-size: 20px">Name: ${name}</span>
            <br/>
            <span style="margin: 10px; font-size: 20px">Email: ${email}</span>
            <br/>
            <span style="margin: 10px; font-size: 20px">Message: ${message}</span>
            <br/>
            <span style="margin: 10px; font-size: 20px">Package: ${packages}</span>
          </div>
        </div>
        `,
        })
          .then(() => {
            toast.success(`Email sent successfully`);
            setEmailDetails({
              name: "",
              email: "",
              message: "",
              packages: "",
            });
          })
          .catch((error) => {
            toast.error(`Email send failed ${error}`);
          });
    }
  }

  return (
    <>
      <WebIntro sectionName="Let's Talk" />
      <section className={styles.contact_page}>
        <div className={styles.contact_page_header_area}>
          <div className={styles.contact_page_header_contianer}>
            <h1>Contact Us</h1>
            <p>
              Please fill this quick form and I will get back to you within 1
              business day.
            </p>
          </div>
        </div>
        <div className={styles.contact_page_body_area}>
          <div className={styles.contact_page_body_contianer}>
            <div className={styles.contact_card}>
              <div className={styles.contact_card_sides}>
                <div className={styles.contact_card_side_1}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                    value={emailDetails.name}
                  />
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={emailDetails.email}
                  />
                  <span>Select your package :</span>
                  <div className={styles.package_area}>
                    <div>
                      <input
                        type="radio"
                        name="package"
                        id="basic"
                        value="basic"
                        onChange={handleChange}
                      />
                      <label htmlFor="basic">Basic</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="package"
                        id="pro"
                        value="pro"
                        onChange={handleChange}
                      />
                      <label htmlFor="pro">Pro</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="package"
                        id="epic"
                        value="epic"
                        onChange={handleChange}
                      />
                      <label htmlFor="epic">Epic</label>
                    </div>
                  </div>
                </div>
                <div className={styles.contact_card_side_2}>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={emailDetails.message}
                    placeholder="Message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <button
                className={`btn ${styles.contact_card_btn}`}
                onClick={EmailSender}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
