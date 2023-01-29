import React from 'react';

// Import images
import Ware1 from "../images/Ware1.jpg";
import Ware2 from "../images/Ware2.jpg";
import Ware3 from "../images/Ware3.jpg";

const Address = () => {
  return (
    <div className="wares-container" id="wares">

        <div>Наши товары:</div>
        <div className="wares-images">
            <img src={Ware1} alt="Товары" />
            <img src={Ware2} alt="Товары" />
            <img src={Ware3} alt="Товары" />
        </div>

    </div>
  )
}

export default Address;