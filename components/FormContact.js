const FormContact = () => (
  <form
    className="form-contact"
    action="https://formspree.io/f/mvodqryp"
    method="POST"
  >
    <label htmlFor="name-input" className="text-tile-text-minor">
      <p>Name:</p>
      <input id="name-input" className="form-boxes small-box" name="name" />
    </label>
    <label htmlFor="email-input" className="text-tile-text-minor">
      <p>Email:</p>
      <input className="form-boxes small-box" name="email" id="email-input" />
    </label>
    <label htmlFor="message-input" className="text-tile-text-minor">
      Enter Message:
      <textarea
        className="form-boxes"
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
