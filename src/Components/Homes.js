import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const Homes = () => {
    return (
        <>
            <h1 className="heading-1 proyectos">Proyectos</h1>
            <section class="homes" id="proyectos">

                <h3 className="heading-3">Custom-Cards:</h3>
                <p className="descipcion">Una app que consume la api de pixabay.com permitiendo traer imágenes de una determinada categoría para elegir una y crear una tarjeta personalizada con la misma.</p>
                <div className="customCards">
                    <img className="imagen" src="https://i.ibb.co/mBKL997/Custom-Cards-1.jpg" alt="Custom-Cards-1" border="0" />
                    <img className="imagen" src="https://i.ibb.co/bsQ3kmj/Custom-Cards-2.jpg" alt="Custom-Cards-2" border="0" />
                    <img className="imagen" src="https://i.ibb.co/dj1G3yS/Custom-Cards-3.jpg" alt="Custom-Cards-3" border="0" />
                </div>
                <hr />
                <div className="links">
                    <a href="https://github.com/pablo218/customCards.git" target="_blank">
                        <GitHubIcon style={{ fontSize: "40px", color: "black" }} />
                    </a>
                    <a href="https://custom-card.herokuapp.com/" target="_blank">
                        <LanguageIcon style={{ fontSize: "40px", color: "black" }} />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Homes
