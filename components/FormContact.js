import { useForm, ValidationError } from "@formspree/react";

const FormContact = () => (
  <form
    className="form-contact"
    action="https://formspree.io/f/mvodqryp"
    method="POST"
  >
    <label for="name-input" className="text-tile-text-minor" htmlFor="name">
      <p>Name:</p>
      <input id="name-input" className="form-boxes small-box" name="name" />
    </label>
    <label for="email-input" className="text-tile-text-minor" htmlFor="email">
      <p>Email:</p>
      <input className="form-boxes small-box" name="email" id="email-input" />
    </label>
    <label
      for="message-input"
      className="text-tile-text-minor"
      htmlFor="message"
    >
      Enter Message:
    </label>
    <textarea
      className="form-boxes"
      rows={10}
      name="message"
      id="message-input"
      defaultValue=" "
    ></textarea>
    <button type="submit" className="button">
      - Submit -
    </button>
  </form>
);

export default FormContact;
