import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';



const Header = () => {
    return (

        <header className="header" id="home">
            <img src="https://i.ibb.co/DGLR68K/react-Logo.png" alt="react-Logo" className="header__logo" />
            <h3 className="heading-3" style={{ color: "#61DBFB" }}>Desarrollador React Front-End:</h3>
            <h1 className="heading-1">Pablo Gonzales Liendo</h1>
            <p className="btn--pablo header__btn">Hola! Gracias por visitar mi portfolio, espero conocerlos personalmente pronto</p>
            <div className="header__seenon-text">Social</div>
            <div className="header__seenon-logos">
                <a href="https://github.com/pablo218" target="_blank">
                    <GitHubIcon style={{ fontSize: "40px" }} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5493515730424" target="_blank">
                    <WhatsAppIcon style={{ fontSize: "40px" }} />
                </a>
                <a href="https://www.instagram.com/pablogliendo/" target="_blank">
                    <InstagramIcon style={{ fontSize: "40px" }} />
                </a>
                <a href="https://www.facebook.com/pablogliendo/" target="_blank">
                    <FacebookIcon style={{ fontSize: "40px" }} />
                </a>
            </div>
        </header>


    )
}

export default Header
