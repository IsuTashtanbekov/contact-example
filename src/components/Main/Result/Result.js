import React from 'react';
import styles from './Result.module.css';

const Result = (props) => {
    return (
        <select className={styles.select}>
            {props.filteredUsers.map(user => {
                return user.length === 0 ? (<option>
                    Контакты не найдены!
                </option>) : (
                    <option className={styles.option}>
                        {user.length === 0 ? 'Посты не найдены!' : user.name}
                    </option>)
            })}
        </select>
    );
};

export default Result;
