import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <h1 className='nombre'>Noemi Portillo </h1>
            <p className='animate__animated animate__zoomIn front'>Front End Developer</p>
            
        </nav>
        {/* <section id='sobremi'>
            <h2> Sobre mi</h2>
        </section>
        <section id="proyectos">
        <h2>Proyectos</h2>
        <p>Contenido de la sección 2</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>Contenido de la sección 3</p>
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Contenido de la sección 2</p>
      </section> */}
    </div>
  )
}

export default Navbar