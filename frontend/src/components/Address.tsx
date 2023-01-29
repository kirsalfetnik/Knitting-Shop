import React from 'react';
import Building from "../images/Building.jpg";

const Address = () => {
  return (
    <div className="address" id="address">
        <span>
            <img src={Building} alt="Здание" className="building-photo"></img>
        </span>
        <div className="address-text">
            <div>Адрес магазина: ул. Рылева 20/51</div>
            <div>16 мин от ст. метро Площадь Восстания</div>
            <div>5 мин от ст. метро Чернышевская</div>
            <div className='phone'>Номер для связи: 89633410940</div>
        </div>
    </div>
  )
}

export default Address;