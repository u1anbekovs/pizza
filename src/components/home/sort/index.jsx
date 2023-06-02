import React from 'react';
import {BiUpArrow} from "react-icons/bi";
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";
import {setSortId} from "../../../redux/slices/filterSlice";

const list = [
    {title: 'популярности (DESC)', sortProp: 'rating'},
    {title: 'популярности (ASC)', sortProp: '-rating'},
    {title: 'цене (ASC)', sortProp: 'price'},
    {title: 'цене (DESC)', sortProp: '-price'},
    {title: 'алфавиту (ASC)', sortProp: 'name'},
    {title: 'алфавиту (DESC)', sortProp: '-name'},
]
const Sort = () => {
    const sortId = useSelector(state => state.filterSlice.sortId)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)

    const onClickList = (obj) => {
        dispatch(setSortId(obj))
        setOpen(false)
    }

    return (
        <div className="sort">
            <div className="sort--label">
                <BiUpArrow style={{transform: open ? "rotate(180deg)" : "", transition: "0.3s all"}}/>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{sortId.title}</span>
            </div>
            {
                open &&
                <div className="sort--popup">
                    {
                        list.map((obj, i) => (
                            <li key={i} onClick={() => onClickList(obj)}
                                className={sortId.sortProp === obj.sortProp ? "active" : ''}>{obj.title}</li>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Sort;