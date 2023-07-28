import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Carting() {
  return (
    <div className='carting-wrapper'>
        <div className='cart-slides'>
          <div className='cart1'></div>
          <div className='cart2'></div>
          <div className='cart4'></div>
          {/* <div className='cart4'></div> */}
        </div>
        
      <p className='carting-text'>Lightway Academy students dominated and triumphed at the FIA Karting in Schools events, clinching multiple prizes. This was an event organized by the FIA &#40;Fédération Internationale de l'Automobile&#41;. FIA serves as the governing body for motorsport, including Formula 1, ensuring fair competition and fostering the development of future racing champions.</p>
    </div>
  )
}

export default Carting