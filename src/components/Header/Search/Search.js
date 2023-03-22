import React from 'react';
import style from './Search.module.css'

const Search = (props) => {
    console.log(props)
    return (
        <form>
            <input
                type="text"
                placeholder='Напишите что-нубудь'
                className={style.searchInput}
            />
        </form>
    );
};

export default Search;