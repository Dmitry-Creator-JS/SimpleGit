import React from 'react';
import mi from './mainItem.module.css'
import {NavLink} from "react-router-dom";

const MainItem = ({item}) => {
    return (
        <>
            <div className={mi.repo}>
                <div className={mi.repo_header}>
                    <div className={mi.repo_header_name}  > <NavLink to={`/card/${item.owner.login}/${item.name}`}> {item.name} </NavLink>  </div>
                    <div className={mi.repo_header_stars}> {item.stargazers_count} </div>
                </div>
                <div className={mi.last_commit}> {item.updated_at} </div>
                <a href={item.html_url} className={mi.repolink} > Ссылка на репозиторий </a>
            </div>
        </>
    );
};

export default MainItem;