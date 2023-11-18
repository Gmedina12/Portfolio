import React from 'react'
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx'
import style from './ContactPage.module.css'

export const ContactPage = () => {
    return [
        <div>
            <div className={style.containertitle}>
                <h2 className={style.gradientTextForm}>Get in touch with me: <br/>I'm just a message away!</h2>
            </div>

            <ContactForm />


            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1Muxe7VsQ24OrXjqu2U4Q-OXEvxaWvO5L/view?usp=drive_link'>
                    <button className={style.buttonDownload}>Download CV - EN</button>
                </a>
            </div>

            <br/>

            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1I278jvSv03UI3oqEqJo8xsi7aBbvGjqg/view?usp=drive_link'>
                    <button className={style.buttonDownload}>Descargar CV - ES</button>
                </a>
            </div><br/><br/>

        </div>
    ]
}