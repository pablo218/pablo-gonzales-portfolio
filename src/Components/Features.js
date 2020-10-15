import React from 'react'

const Features = () => {
    return (
        <section class="features" id="skills">
            <div class="feature">

                <img style={{ height: "40px" }} class="feature__icon" src="https://i.ibb.co/DGLR68K/react-Logo.png" alt="react-Logo" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-react"></div>
                </div>
                <p class="feature__text">Después de javascript, creo que React es en lo que mejor me desempeño, casi un año trabajando con React, aunque no formalmente (no me han pagado por hacerlo )-: ...) aun así puedo pasar todo el día armando componentes.</p>
            </div>

            <div class="feature">

                <img class="feature__icon" src="https://i.ibb.co/cQnXxrC/Java-Scriptlogo2.jpg" alt="Java-Scriptlogo2" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-js"></div>
                </div>
                <p class="feature__text">Mi fuerte, no puedo decir que soy un experto en JS pero me encanta investigarlo y encontrar soluciones con este lenguaje.</p>
            </div>

            <div class="feature">

                <img class="feature__icon" src="https://i.ibb.co/rp9KnTH/sass-Logo2.png" alt="sass-Logo2" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-sass"></div>
                </div>
                <p class="feature__text">Llevo poco tiempo implementándolo en mis proyectos, pero el suficiente como para desempeñarme con confianza con él.</p>
            </div>

            <div class="feature">

                <img style={{ width: "35px" }} class="feature__icon" src="https://i.ibb.co/DMjdP0b/cssLogo2.png" alt="cssLogo2" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-css"></div>
                </div>
                <p class="feature__text">No me considero un diseñador pero si me lo propongo puedo duplicar cualquier interfaz.</p>
            </div>

            <div class="feature">

                <img class="feature__icon" src="https://i.ibb.co/QkwF3nd/Bootstrap.png" alt="Bootstrap" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-boots"></div>
                </div>
                <p class="feature__text">Tengo un buen manejo, aunque lo uso poco en mis proyectos</p>
            </div>

            <div class="feature">

                <img class="feature__icon" src="https://i.ibb.co/vJ98kF8/nodejs-Logo.png" alt="nodejs-Logo" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-node"></div>
                </div>
                <p class="feature__text">No se puede ser un desarrollador JavaScript sin saber Node, por lo que estoy aprendiendo.</p>
            </div>

            <div class="feature">

                <img style={{ height: "38px" }} class="feature__icon" src="https://i.ibb.co/TKQgxbt/bandera-Eng.jpg" alt="ingles-Logo" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-ingles"></div>
                </div>
                <p class="feature__text">Nivel intermedio. Muy buena lecto-comprensión pero no hablo con total fluidez.</p>
            </div>

            <div class="feature">

                <img class="feature__icon" src="https://i.ibb.co/SJj7Xcb/Office.png" alt="Office" border="0" />
                <div className="barra">
                    <div className="barra__progreso barra__progreso-office"></div>
                </div>
                <p class="feature__text">Excelente manejo de office, principalmente Excel.</p>
            </div>
        </section>
    )
}

export default Features