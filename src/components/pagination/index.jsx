import React from 'react';
import ReactPaginate from 'react-paginate';
import style from "./index.module.scss"
import {MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from "react-icons/md"

const Pagination = ({currentPage, onChange}) => {
    return (
        <>
            <ReactPaginate className={style.root}
                           breakLabel="..."
                           nextLabel={<MdKeyboardDoubleArrowRight/>}
                           previousLabel={<MdKeyboardDoubleArrowLeft/>}
                           onPageChange={event => onChange(event.selected + 1)}
                           pageRangeDisplayed={4}
                           pageCount={3}
                           forcePage={currentPage - 1}
                           renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Pagination;