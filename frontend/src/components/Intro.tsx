import React from 'react';
import Work1 from "../images/Work1.jpg";

const Intro = () => {
  return (
    <div className="intro" id="intro">
        <div className="intro-container">
            <div className="intro-first">
            Привет☆ Мы вяжем для тебя авторские изделия:
            свитера, шапки, шарфы, варежки, митенки, авоськи, сумки, гетры, носки, пледы, игрушки🌀 
            а также индивидуальные изделия на заказ.
            </div>
            <div>
            Frud - это уголок уюта. Здесь ты найдешь свою вещь в стиле винтаж, бохо, вамп, кэжуал, брумстик, оверсайз и др.
            Заходи к нам!
            </div>
        </div>
        <span>
            <img src={Work1} alt="Изделие" className="work1-photo"></img>
        </span>
    </div>
  )
}

export default Intro;