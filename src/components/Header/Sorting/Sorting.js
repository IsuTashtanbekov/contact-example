import React, {useState} from 'react';
import style from './Sorting.module.css'
import {reverseSort} from "../../../store/contact-reducer";

const Sorting = (props) => {

    const [sortByName, setSortByName] = useState(false)

    const [sortByAlphabetically, setSortAlphabetically] = useState(false)

    const onSortByName = e => {
        onSwitchMode(sortByName, setSortByName)
        if (sortByName === true) {
            props.sortByName()
        } else if (sortByName === false) {

        }
    }
    const onSortByAlphabetically = e => {
        onSwitchMode(sortByAlphabetically,setSortAlphabetically)
        if (sortByAlphabetically === true) {
            props.reverseSort()
        }
    }

    const onSwitchMode = (argument, setArgument) => {
        if (argument === true) {
            setArgument(false)
        } else if (argument === false) {
            setArgument(true)
        }
    }

    return (
        <aside>
            <button className={style.sortingButton}>
                Сортировка по алфавиту
                <input
                    type="checkbox"
                    checked={sortByAlphabetically}
                    onClick={ e => onSwitchMode(sortByAlphabetically, setSortAlphabetically())}
                    onChange={e => onSortByAlphabetically()}
                />
            </button>
            <button className={style.sortingButton}>
                Сортировка по имени
                <input
                    type="checkbox"
                    checked={sortByName}
                    onClick={ e => onSwitchMode(sortByName, setSortByName()) }
                    onChange={e => onSortByName()}
                />
            </button>
        </aside>
    );
};

export default Sorting;