import React from 'react';
import go from "./../../assets/image/go.svg"
import style from "./Uncertain.module.scss"
import {NavLink} from "react-router-dom";

const Uncertain = () => {
    return (
        <div className={style.Uncertain}>
            <h1>Корзина пустая !!! 😕</h1>
            <p>Вероятней всего, вы не заказывали ещё пиццу. <br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={go} alt=""/>
            <NavLink to={`/`}>
                <button>Вернуться назад</button>
            </NavLink>
        </div>
    );
};

export default Uncertain;