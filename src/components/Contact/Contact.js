import React from 'react';
import "./Contact.css";
import emailjs from "emailjs-com";
import { useForm } from 'react-hook-form';

export default function Contact() {

    const { handleSubmit } = useForm();

    function emailMe(e) {
        e.preventDefault();

        emailjs.sendForm('service_23xjuf7', 'template_egh1mle', e.target, '7Pp3J38zi_F5L3HZz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
        
    return (
        <div className="contact" id="contact">

            <img src="img/contact-icon.png" className="icon" alt="phone-icon-for-contact-section" />

            <div className="contact-icons">
                <a href="https://github.com/Mikelbalazic" target="react/jsx-no-target-blank">
                    <img src="img/github-logo.png" className="github-logo" alt="Github_Logo" />
                </a>
                <a href="https://www.instagram.com/mikelreedbalazic/?hl=en" target="react/jsx-no-target-blank">
                    <img src="img/insta-logo.png" className="insta-logo" alt="Instagram_Logo" />
                </a>
            </div>

            <form onSubmit={emailMe}>
                <input type="text" className="email-form" placeholder="Name" name="name" />
                <input type="email" className="email-form" placeholder="Email Address" name="name" />
                <input type="text" className="email-form" placeholder="Subject" name="name" />
                <textarea className="email-form" placeholder="Message" name="message"></textarea>
                <input type="submit" className="email-submit-btn" value="Send Message"></input>
            </form>


        </div>
    )
}