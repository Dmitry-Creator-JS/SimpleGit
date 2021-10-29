import React, {useEffect} from 'react';
import m from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/actions";
import MainItem from "./MainItem";

const Main = () => {
 const dispatch = useDispatch();
 const repos = useSelector(state => state.reposReducer.repos)

    console.log(repos)

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div className={m.body} >
            {repos.map(rep => <MainItem key={rep.id} item={rep} />)}
        </div>
    );
};

export default Main;