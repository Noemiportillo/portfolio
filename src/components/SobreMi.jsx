import React from 'react'
import '../styles/sobremi.css'


const SobreMi = () => {
  return (
    <section id="section1">
    <div className="animate__animated animate__fadeInLeft about-me-container">
        <img 
            className=' sombreado '
            src={require('../img/sombreado.png')} 
            alt='sombreado' />
        <img 
            className='ilustracion'
            src={require('../img/Portatil.png')}
            alt='ilustracion'  />
        <p className="descripcion-titulo">Bienvenidos a mi Portfolio!
              <br />       
            <span className='descripcion'>
              <span className='mayuscula'>M</span>e llamo <span className='mayuscula'>N</span>oemí y recientemente completé un bootcamp de Full Stack Development, pero mi interés y pasión se encuentran en el desarrollo Front End.
              <br />
              <span className='mayuscula'>E</span>stoy emocionada por seguir creciendo y mejorando como desarrolladora, y espero trabajar en proyectos emocionantes que me permitan desafiarme y aprender más.
            </span>
        </p>    
    </div>
  </section>
  )
}

export default SobreMi