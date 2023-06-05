import classes from "./contact-form.module.css";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmailHandler = (event) => {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section className={classes.contact}>
      <h1>How Can I Help You</h1>
      <form className={classes.form} onSubmit={sendEmailHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
