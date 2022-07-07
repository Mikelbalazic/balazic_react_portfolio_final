import React from 'react';
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact" id="contact">

        <img src="img/contact-icon.png" class="icon" alt="phone-icon-for-contact-section"/>
            <div class="contact-list">
                <ul>
                    <li>
                        <b>Email:</b> mikel.balazic@gmail.com
                    </li>
                    <li>
                        <b>Mobile:</b> 647-926-4789
                    </li>
                    <li>
                        <b>Instagram:</b> mikelreedbalazic
                    </li>
                    <li>
                        <b>Github:</b> https://github.com/Mikelbalazic
                    </li>
                </ul>
            </div>
        </div>
    )
}