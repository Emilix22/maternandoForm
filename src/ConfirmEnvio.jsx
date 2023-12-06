import React from 'react'
import Logo from "../src/assets/Logo.png"
import { Link } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function ConfirmEnvio() {

    return (
        <div>
            <article className='container'>
                {/* <Link to="https://www.instagram.com/maternandojuntasyenred/" className='cerrar_confirm'>
                    Cerrar <HighlightOffIcon />
                </Link> */}

                <header className='header_confirm'>
                    <img className='logo_confirm' src={Logo} alt="logo" />
                </header>

                <p>Gracias por contactarnos.<br />En breve nos pondremos en contacto.</p>

            </article>
        </div>
    )
}

export default ConfirmEnvio
