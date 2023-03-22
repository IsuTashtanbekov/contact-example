import React from 'react';

const Result = (props) => {
    return (
        <div>
            {props.filteredUsers.map( user => {
                return <div>
                    {user.name? user.name : <div>'Посты не найдены!'</div>}
                </div>
            })}
        </div>
    );
};

export default Result;