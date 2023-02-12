import React from 'react'
import '../styles/tecnologias.css'
import { GrHtml5 } from 'react-icons/gr';
import { TbBrandCss3 } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { SiVisualstudiocode } from 'react-icons/si'


const Tecnologias = () => {
  return (
    <div className='container-principal'>
    <p className='titulo-container'>TECNOLOGIAS Y HERRAMIENTAS</p>
       <div className='animate__animated animate__fadeInLeft container-tecnologias'>
          <div className='tecnologias'>
            <h1 className='titulo-tecnologia'>Frontend</h1>
                <div>
                    <p className='titulo'>HTML5</p>
                    <GrHtml5 className='icono-tecnologia'/>                
                </div>
                <div>
                    <p className='titulo'>CSS3</p>
                    <TbBrandCss3 className='icono-tecnologia'/>
                </div>
                <div>
                    <p className='titulo'>JAVASCRIPT</p>  
                    <IoLogoJavascript className='icono-tecnologia'/>
                </div>
                <div>
                    <p className='titulo'>REACT </p>
                    <FaReact className='icono-tecnologia' />
                </div>
        </div>
        <div className='tecnologias'>
            <h1 className='titulo-tecnologia'>Backend</h1>
                <div>
                     <p className='titulo'>NODE</p>
                     <FaNode className='icono-tecnologia' />
                </div>
                <div>
                    <p className='titulo'>MONGODB</p>
                    <SiMongodb className='icono-tecnologia'/>
                </div>
        </div>     
        <div className='tecnologias'>
            <h1 className='titulo-tecnologia'>Herramientas</h1>
                <div>
                    <p className='titulo'>GITHUB</p>
                    <FiGithub className='icono-tecnologia'/>
                </div>
                <div>           
                    <p className='titulo'>VSCODE</p>
                    <SiVisualstudiocode className='icono-tecnologia'/>
                </div>
         </div>     
      </div>
    </div>
  )
}

export default Tecnologias