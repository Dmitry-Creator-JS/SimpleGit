import React from 'react';
import mi from './mainItem.module.css'

const MainItem = ({item}) => {
    return (
        <>
            <div className={mi.repo}>
                <div className={mi.repo_header}>
                    <div className={mi.repo_header_name}> {item.name} </div>
                    <div className={mi.repo_header_stars}> {item.stargazers_count} </div>
                </div>
                <div className={mi.last_commit}> {item.updated_at} </div>
                <a href={item.html_url} className={mi.repolink} > Ссылка на репозиторий </a>
            </div>
        </>
    );
};

export default MainItem;