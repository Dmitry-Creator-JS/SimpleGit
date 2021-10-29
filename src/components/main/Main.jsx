import React, {useEffect, useState} from 'react';
import m from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/actions";
import MainItem from "./MainItem";
import MyLoader from "../../sharedUI/myLoader/MyLoader";
import MyInput from "../../sharedUI/myInput/MyInput";
import MyButton from "../../sharedUI/myButton/MyButton";

const Main = () => {
 const dispatch = useDispatch();
 const repos = useSelector(state => state.reposReducer.repos)
    const isLoad = useSelector(state => state.reposReducer.isLoad)
    const [search, setSearch] = useState('')



    useEffect(() => {
        dispatch(getRepos())
    }, [])


    function searchHandler() {
        dispatch(getRepos(search))
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
        </div>
    );
};

export default Main;