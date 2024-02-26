//icons
import { Icon } from "@iconify/react";

const ContactMe = () => {
  return (
    <div className="container" id="contactMe">
      <h2 className="containerHeader">
        <span className="red">03.</span>contactMe
      </h2>
      <form
        action="https://formsubmit.co/akashrattan43@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="New Message From Portfolio"
        />
        <small>from:</small>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email.."
          required
        />
        <small>to:</small>
        {/* <input type="email" id='myEmail' name="email" placeholder="Akash.Rattan@yahoo.com" disabled /> */}
        <p id="myEmail">akashrattan43@gmail.com</p>
        <small>message:</small>
        <textarea
          name="message"
          id="textarea"
          rows="10"
          cols="20"
          maxLength="500"
          placeholder="write your message.."
          required
        ></textarea>
        <button type="submit" className="btn btn-primary sendBtn">
          send <Icon icon="fluent:send-20-filled" className="sendIcon" />
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
