import React, {useState} from 'react';
import style from './Sorting.module.css'

const Sorting = (props) => {

    const [sortByName, setSortByName] = useState(false)

    const [sortByAlphabetically, setSortAlphabetically] = useState(false)

    const onSortByName = e => {
        onSwitchMode(sortByName, setSortByName)
        if (sortByName === true) {
            props.sortByName()
        }
    }
    const onSortByAlphabetically = e => {
        onSwitchMode(sortByAlphabetically,setSortAlphabetically)
        if (sortByName === true) {
            props.sortByName()
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
            {/*<select className={style.select}>*/}
            {/*    <option value="" className={style.option}>По алфавиту</option>*/}
            {/*    <option value="" className={style.option}>По </option>*/}
            {/*    <option value="" className={style.option}>Op1</option>*/}
            {/*    <option value="" className={style.option}>Op1</option>*/}
            {/*    <option value="" className={style.option}>Op1</option>*/}
            {/*</select>*/}
            <button className={style.sortingButton}>
                Сортировка по алфавиту
                <input
                    type="checkbox"
                    checked={sortByAlphabetically}
                    onClick={ e => onSortByAlphabetically()}
                />
            </button>
            <button className={style.sortingButton}>
                Сортировка по имени
                <input
                    type="checkbox"
                    checked={sortByName}
                    onClick={ e => onSortByName() }
                />
            </button>
        </aside>
    );
};

export default Sorting;