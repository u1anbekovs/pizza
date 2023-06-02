import React from 'react';
import style from "./Search.module.scss"
import {FcSearch} from "react-icons/fc"
import {MdOutlineClose} from "react-icons/md"
import {SearchContext} from "../../App";
import debounce from "lodash.debounce"


const Search = () => {
    const {setSearch} = React.useContext(SearchContext)
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef()

    const onClickClear = () => {
        setSearch('')
        setValue('')
        inputRef.current.focus()
    }


    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearch(str)
        }, 500), [])


    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={style.root}>
            <FcSearch className={style.icon}/>
            <input ref={inputRef} value={value} onChange={onChangeInput} type="text"
                   placeholder="Поиск пицц...."/>
            {value &&
                <MdOutlineClose onClick={onClickClear} className={style.close}/>
            }
        </div>
    );
};

export default Search;