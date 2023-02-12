import React from "react";
import '../styles/proyectos.css'

const Proyectos = () => {
  
return (
  <>
<div className="text-container">
<h1 className='titulo-container'>PROYECTOS</h1>
<p className="text-projects"> Les muestro aquí algunos de mis proyectos. ¡Haga clic en la imagen correspondiente para ver cómo se ven! </p>
</div>
<div class="project-gallery">  
  <div class="project-item">
    <a href="https://control-gastos-np.netlify.app/">
      <img className="project-img" src={require('../img/controlDeGastos.png')} alt="Control De Gastos" />
      <p>Control de gastos</p>
    </a>
  </div>
  <div class="project-item">
    <a href="https://lista-tareas-np.netlify.app/">
      <img className="project-img" src={require('../img/AgregarTareas.png')} alt="Lista de Tareas" />
      <p>Lista de tareas</p>
    </a>
  </div>
  <div class="project-item">
    <a href="https://calculadora-noemi.netlify.app/">
      <img className="project-img" src={require('../img/calculadora.png')} alt="Calculadora" />
      <p>CALCULADORA</p>
    </a>
  </div>
   <div class="project-item">
    <a href="https://citas-veterinaria-np.netlify.app">
      <img className="project-img" src={require('../img/citas-vete.png')} alt="Calculadora" />
      <p>Citas veterinaria</p>
    </a>
  </div>
  <div class="project-item">
    <a href="https://contador-clics-np.netlify.app/">
      <img className="project-img" src={require('../img/contador-clics.png')} alt="Calculadora" />
      <p>CONTADOR DE CLICS</p>
    </a>
  </div>
  <div class="project-item">
    <a href="https://fakeflix-nuclio.netlify.app/login">
      <img className="project-img" src={require('../img/fakeflix1.png')} alt="Calculadora" />
      <p>Fake Flix</p>
      <br />
      <p>Proyecto final Bootcamp</p>
    </a>
  </div>
</div>
</>

)
}
export default Proyectos

// import React, {useState} from 'react'
// import '../styles/proyectos.css';

// const Proyectos = () => {

//   const [isVisible, setIsVisible] = useState(false);

//   const handleOpenModal = () => {
//     setIsVisible(true);
//   };

//   const handleCloseModal = () => {
//     setIsVisible(false);
//   };


//   return (
//     <>
//     <div className='proyectos'>
//       <button onClick={handleOpenModal}>Abrir modal</button>
//       {isVisible && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2> Titulo del Modal</h2>
//             <p>Contenido del modal</p>
//             <button onClick={handleCloseModal} className="close">Cerrar Modal</button>
//           </div>
//         </div>
//       )}
//       </div>
//     </>
//   );
// };


// export default Proyectos