import React from 'react'

import './Menu.scss'

const Menu = ({ clicked, visible }) => {
    return (

        <ul className={`menu ${visible && "menu-visible"}`}>
            <li onClick={clicked} className="menu__item">
                <a href="#home">
                    HOME
                </a>
            </li>
            <li onClick={clicked} className="menu__item">
                <a href="#about">
                    SOBRE MI
                </a>
            </li>
            <li onClick={clicked} className="menu__item">
                <a href="#skills">
                    SKILLS
                </a>
            </li>
            <li onClick={clicked} className="menu__item">
                <a href="#proyectos">
                    PROYECTOS
                </a>
            </li>
            <li onClick={clicked} className="menu__item">
                <a href="#contacto">
                    CONTACTO
                </a>
            </li>
        </ul>

    )
}

export default Menu