import React, {useState} from 'react';
import style from './Search.module.css'

const Search = (props) => {
    const [inputValue, setInputValue] = useState('')
    const onSearchHandle = (e) => {
        setInputValue(e)
        props.searchContacts(e)
    }
    return (
        <form>
            <input
                type="text"
                placeholder='Напишите что-нубудь'
                className={style.searchInput}
                value={inputValue}
                onChange={e => onSearchHandle(e.currentTarget.value)}
            />
        </form>
    );
};

export default Search;