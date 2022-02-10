import React from "react";
import api from './CardsApi';


const Card = ({ uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg, random}) => {
    return (
        <article className="card">
            <p className="card__uid">{`Штрихкод: ${uid}`}</p>
            <p className="card__uid">{`Бренд: ${brand}`}</p>
            <p className="card__uid">{`Название: ${name}`}</p>
            <p className="card__uid">{`Сорт: ${style}`}</p>
            <p className="card__uid">{`Хмель: ${hop}`}</p>
            <p className="card__uid">{`Дрожжи: ${yeast}`}</p>
            <p className="card__uid">{`Солод: ${malts}`}</p>
            <p className="card__uid">{`Уровень горечи: ${ibu}`}</p>
            <p className="card__uid">{`Крепость: ${alcohol}`}</p>
            <p className="card__uid">{`Плотность: ${blg}`}</p>
            <button className="card__button" onClick={random}>Выбрать пиво</button>
        </article>
    )
}

export default Card;
