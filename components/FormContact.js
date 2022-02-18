import styles from '../styles/page-styles/contact.module.scss';


const FormContact = () => (
  <form
    className={styles.form}
    action="https://formspree.io/f/mvodqryp"
    method="POST"
  >
    <label htmlFor="name-input" className="text-tile-text-minor">
      <p>Name:</p>
      <input id="name-input" className={`${styles.boxes} ${styles.smallbox}`} name="name" />
    </label>
    <label htmlFor="email-input" className={styles.textminor}>
      <p>Email:</p>
      <input className={`${styles.boxes} ${styles.smallbox}`} name="email" id="email-input" />
    </label>
    <label htmlFor="message-input" className={styles.textminor}>
      Enter Message:
      <textarea
        className={styles.boxes}
        rows={10}
        name="message"
        id="message-input"
        defaultValue=" "
      />
    </label>
    <button type="submit" className="button">
      - Submit -
    </button>
  </form>
);

export default FormContact;
