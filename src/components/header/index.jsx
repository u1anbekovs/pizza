import React from 'react';
import logo from "../../assets/image/image 1.svg"
import "./index.scss"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdOutlineCreateNewFolder} from "react-icons/md"
import {NavLink} from "react-router-dom";
import Search from "../search";


const Header = () => {
    return (
        <div id="header">
            <div className="header">
                <NavLink to={`/`}>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                        <div>
                            <h1>Store Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>
                <Search/>
                <div className="header--btn">
                    <NavLink to={`/create`}>
                        <MdOutlineCreateNewFolder/>
                    </NavLink>

                    <i>520 ₽</i>
                    <NavLink to={`/basket`}>
                        <AiOutlineShoppingCart/>
                    </NavLink>
                    <i>0</i>
                </div>
            </div>
        </div>
    );
};

export default Header;