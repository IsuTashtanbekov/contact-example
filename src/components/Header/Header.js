import React from 'react';
import style from './Header.module.css'
import Sorting from "./Sorting/Sorting";
import Search from "./Search/Search";
const Header = () => {
    return (
        <header className={style.header}>
            <h1>Книга контактов</h1>
            <div className={style.interactiveBlock}>
                <Sorting/>
                <Search/>
            </div>
        </header>
    );
};

export default Header;