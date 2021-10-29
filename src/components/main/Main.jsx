import React, {useEffect, useState} from 'react';
import m from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getRepos, setCurrentPageAC} from "../redux/actions";
import MainItem from "./MainItem";
import MyLoader from "../../sharedUI/myLoader/MyLoader";
import MyInput from "../../sharedUI/myInput/MyInput";
import MyButton from "../../sharedUI/myButton/MyButton";
import './../../App.css'
import {createPages} from "../../assets/fillPages";

const Main = () => {
 const dispatch = useDispatch();
 const repos = useSelector(state => state.reposReducer.repos)
    const isLoad = useSelector(state => state.reposReducer.isLoad)
    const currentPage = useSelector(state => state.reposReducer.currentPage)
    const totalCount = useSelector(state => state.reposReducer.totalCount)
    const perPage = useSelector(state => state.reposReducer.perPage)

    const [search, setSearch] = useState('')

    const pagesCount = Math.ceil(totalCount/perPage)

    const pages = []
    createPages(pages, pagesCount, currentPage)




    useEffect(() => {
        dispatch(getRepos(search, currentPage, perPage))
    }, [currentPage])    //получать данные, когда меняется текущая страница


    function searchHandler() {
     dispatch(setCurrentPageAC(1))
        dispatch(getRepos(search, currentPage, perPage))
    }

    return (
        <div >
                <div className={m.search}>
                    <MyInput
                        value={search}
                        onChange ={(e) => setSearch(e.target.value)}


                    />
                    <MyButton onClick={()=> searchHandler()} > Поиск </MyButton>
                </div>

            { isLoad === false
                    ?
                repos.map(rep => <MainItem key={rep.id} item={rep} />)
                    :
                <MyLoader/>
            }

            <div className='pages'>
                {pages.map((page, idx) => <span
                    className={ currentPage == page ? 'current_page' : 'page' }
                    key={idx}
                    onClick={() => dispatch(setCurrentPageAC(page))}
                > {page} </span>)}
            </div>

        </div>
    );
};

export default Main;