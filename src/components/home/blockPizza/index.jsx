import React from 'react';
import "./index.scss"
import {AiOutlinePlus} from "react-icons/ai"


const BlockPizza = ({items}) => {
    return (
        <div id="block">
            <div className="block">
                {
                    items.map((obj) => (
                        <div key={obj.id} className="block--card">
                            <img src={obj.img} alt=""/>
                            <h3>{obj.name}</h3>
                            <div className="block--card__ul">
                                <ul>
                                    {
                                        obj.types.map((name) => (
                                            <li key={name.id}>{name.type}</li>
                                        ))
                                    }
                                </ul>
                                <ul>
                                    {
                                        obj.sizes.map((size) => (
                                            <li key={size.id}>{size.num}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="block--card__price">
                                <i>от {obj.price} ₽</i>
                                <button><AiOutlinePlus/> Добавить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlockPizza;