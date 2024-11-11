import { Fragment } from "react";
import LayoutComp from "../../components/LayoutComp";
import "./style.css";
import Hero from "../../components/Hero";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";
import { IconBrandTiktok } from "@tabler/icons-react";

export default function Contacts() {
  return (
    <Fragment>
      <LayoutComp>
        <Hero heading={"Contacts"} />
        <div className="container">
          <div className="flex ">
            <div className="contact-form items-center col-8">
              <h1 className="contact-heading">Contact Form</h1>
              <div className="contact-box-form w-full flex justify-center items-center">
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
            <div className="get-intouch col-4">
              <h1 className="get-intouch get-section">Get In Touch</h1>
              <div className="get-intouch get-text">
                We are always happy to help and provide more information about
                our services. You can contact us through email, phone, or by
                filling out the form on our website. Thank you for considering
                us!
              </div>
              <a className="get-intouch get-tell" href="tel:+1 800 234 56 78">
                +1 800 234 56 78
              </a>
              <a
                className="get-intouch get-mail"
                href="malito:support@hotflix.template"
              >
                support@hotflix.template
              </a>
              <div className="get-intouch contact-social flex">
                <a href="#">
                  <IconBrandFacebook stroke={2} />
                </a>
                <a href="#">
                  <IconBrandX stroke={2} />
                </a>
                <a href="#">
                  <IconBrandInstagram stroke={2} />
                </a>
                <a href="#">
                  <IconBrandDiscord stroke={2} />
                </a>
                <a href="#">
                  <IconBrandTelegram stroke={2} />
                </a>
                <a href="#">
                  <IconBrandTiktok stroke={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
