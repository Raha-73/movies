import { Fragment } from "react";
import LayoutComp from "../../components/LayoutComp";
import "./style.css";
import Hero from "../../components/Hero";

export default function Contacts() {
  return (
    <Fragment>
      <LayoutComp>
        <Hero heading={"Contacts"} />
        <div className="container pb-160">
          <div className="flex items-center">
            <div className="contact-form col-8">
              <h1 className="contact-heading">Contact Form</h1>
              <div className="contact-box w-full flex justify-center items-center">
                <div className="contact-input flex flex-column col-6">
                  <label>Name</label>
                  <input type="text" className="name " placeholder="John" />
                </div>
                <div className="contact-input flex flex-column col-6">
                  <label>Email</label>
                  <input
                    type="text"
                    className="email "
                    placeholder="email@email.com"
                  />
                </div>
                <div className="contact-input flex flex-column col-12">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="subject "
                    placeholder="Partnership"
                  />
                </div>
                <div className="contact-input flex flex-column col-12">
                  <label>Message</label>
                  <textarea
                    className="message "
                    placeholder="Type Your Message..."
                    rows="5"
                  />
                </div>
                <button className="send-information">Send</button>
              </div>
            </div>
            <div className="get-intouch col-4">Get In Touch</div>
          </div>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
