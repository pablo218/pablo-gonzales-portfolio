import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <footer class="footer" id="contacto">
            <ul class="nav">
                <li class="nav__item"><p class="nav__link"><PhoneIcon />&nbsp;&nbsp;3515730424</p></li>
                <li class="nav__item"><p class="nav__link"><MailIcon />&nbsp;&nbsp;pablogonzales.218@gmail.com</p></li>
                <li class="nav__item"><p class="nav__link"><MailIcon />&nbsp;&nbsp;pablogonzales_218@hotmail.com</p></li>
            </ul>
            <p class="copyright">
                &copy; Pablo José Gonzales Liendo.
        </p>
        </footer>
    )
}

export default Footer
