import React from 'react';
import Tilt from 'react-tilt';
import brain from './logo3.png';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max : 65 }} style={{ height: 50, width: 250 }} >
        <div className="Tilt-inner pa2" style={{borderRadius:750}}>
          <img style={{paddingTop: '0px' , height:'150px'}} alt='logo' src={brain} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;