import React from 'react'
import { SlSocialLinkedin} from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import '../styles/contacto.css';

const Contacto = () => {
  return (
    <>
      <div className='container-info'>
        <p>Puedes encontrarme tambien en</p>
        <a href='https://www.linkedin.com/in/noemiportillober/'>
          <SlSocialLinkedin  className='iconos' />
        </a>
        <a href="https://github.com/Noemiportillo">
          <FiGithub className='iconos'/>
          </a>
      </div>
      <div className='container-iconos'>
      </div>
    </>
    
  )
}

export default Contacto