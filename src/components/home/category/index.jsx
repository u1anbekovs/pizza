import React from 'react';
import "./index.scss"

const Category = ({value, onChangeCategory}) => {
    const arr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые",]
    return (
        <section id="categories">
            <div className="categories">
                <ul>
                    {
                        arr.map((name, i) => (
                            <li key={i} onClick={() => onChangeCategory(i)}
                                className={value === i ? "active" : ""}>{name}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Category;