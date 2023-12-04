import React from 'react'
import Logo from "../src/assets/Logo.png"
import Img_insta from "../src/assets/Img_insta.png"
import { Link } from "react-router-dom";


function ConfirmEnvio() {

    return (
        <div>
            <article className='container'>

                <header className='header_confirm'>
                    <img className='logo_confirm' src={Logo} alt="logo" />
                </header>

                <p>Gracias por contactarnos!<br />En breve nos pondremos en contacto contigo, Saludos!</p>

            </article>

            <div className='botones_confirm'>
                <Link to="https://www.instagram.com/maternandojuntasyenred/" className='btn_volver'>
                Volver <img width="20" src={Img_insta} alt="img_insta" />
                </Link>
            </div>

            
            
        </div>
    )
}

export default ConfirmEnvio
