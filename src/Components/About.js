import React from 'react'

const About = () => {
    return (
        <>
            <div class="about__mi">
                <h3 class="heading-3 mb-sm">Pablo Gonzales</h3>
                <h2 style={{ color: "white" }} class="heading-2 heading-2--dark mb-md">Sobre mi:</h2>
                <p class="about__text" >Mi nombre es Pablo, tengo 35 años y soy nacido en la ciudad Córdoba.
                Metido en el mundo del desarrollo desde hace tres años cuando tras llevar a cabo ciertas
                automatizaciones de tareas mediante Visual Basic, descubrí una pasión totalmente desconocida, programar...
                Así, este entusiasmo por este nuevo mundo me llevó al desarrollo web y a JavaScript, un lenguaje tan amigable
                con un novato que es imposible no quererlo, JavaScript siempre generó en mí un deseo de aprender más y más, de esta manera
                llegué a React... Hoy llevo un año aprendiendo React, y me gustaría poder trabajar formalmente con él.</p>

            </div>

            <div class="about__laboral" id="about">
                <h3 class="heading-3 mb-sm">Experiencia laboral</h3>
                <h2 class="heading-2 heading-2--dark mb-md">Últimos trabajos:</h2>
                <p class="about__text">Freelance (2018-actualidad)</p>
                <p class="about__text" style={{ fontWeight: "bold" }}>FCA AUTOMOBILES ARGENTINA S.A. (2009 – Actualmente trabajando):</p>
                <p class="about__text" >-Front-end developer (2018-Actualiadad): </p>
                <p class="about__text" >Maquetación, desarrollo y soporte de extensiones Chrome para la misma plataforma.</p>

                <p class="about__text" >-Analista de cuentas a pagar (2009-2018)</p>
                <p class="about__text" >Análisis de precios, conciliación de cuentas, Tareas de cierre contable</p>

            </div>
        </>
    )
}
export default About
