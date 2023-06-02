import React from 'react';
import Category from "./category";
import BlockPizza from "./blockPizza";
import Sort from "./sort";
import Pagination from "../pagination";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage} from "../../redux/slices/filterSlice";
import Loading from "./blockPizza/Loading";
import axios from "axios";

const Home = () => {

    const dispatch = useDispatch()
    const {categoryId, sortId, currentPage} = useSelector((state) => state.filterSlice)

    const [items, setItems] = React.useState([])
    const {search} = React.useContext(SearchContext)
    const [loading, setLoading] = React.useState(true)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangeCurrentPage = number => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        setLoading(true)

        const order = sortId.sortProp.includes('-') ? 'asc' : 'desc';
        const sortBy = sortId.sortProp.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const searchFilter = search ? `&search=${search}` : ''

        axios.get(
            `https://6469c222183682d61445d295.mockapi.io/items?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${searchFilter}`
        )
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
        window.scroll(0, 0)
    }, [categoryId, sortId, search, currentPage])

    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Category value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2>Пиццы для вас!</h2>
            {
                loading ? <Loading/> : <BlockPizza items={items}/>
            }
            <Pagination currentPage={currentPage} onChange={onChangeCurrentPage}/>
        </>
    );
};

export default Home;