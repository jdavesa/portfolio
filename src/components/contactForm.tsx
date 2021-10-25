import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("meqvwvan");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
    <h1>Get in touch</h1>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email"  placeholder="Enter your email address"/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message here..."/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
