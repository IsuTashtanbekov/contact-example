import React from 'react';
import style from './Search.module.css'

const Search = () => {
    return (
        <form>
            <input
                type="text"
                placeholder='Напишите что-нубудь'
                className={style.input}
            />
        </form>
    );
};

export default Search;