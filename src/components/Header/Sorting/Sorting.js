import React from 'react';
import style from './Sorting.module.css'

const Sorting = () => {
    return (
        <aside>
            <select className={style.select}>
                <option value="" className={style.option}>По алфавиту</option>
                <option value="" className={style.option}>По </option>
                <option value="" className={style.option}>Op1</option>
                <option value="" className={style.option}>Op1</option>
                <option value="" className={style.option}>Op1</option>
            </select>
        </aside>
    );
};

export default Sorting;