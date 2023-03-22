import React from 'react';
import style from './Header.module.css'
import Sorting from "./Sorting/Sorting";
import Search from "./Search/Search";
import SearchHoc from "./Search/SearchHoc";
import SortingHoc from "./Sorting/SortingHoc";
const Header = () => {
    return (
        <header className={style.header}>
            <h1>Книга контактов</h1>
            <div className={style.interactiveBlock}>
                <SortingHoc/>
                <SearchHoc/>
            </div>
        </header>
    );
};

export default Header;