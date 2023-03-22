import React from 'react';
import '../../App.css'

const MyModal = ({active, setActive, user}) => {
    return (
        <div className={active? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active? "modal-content active" : 'modal-content'} onClick={e => e.stopPropagation() }>
                <ul>
                    <li>{user.name}</li>
                    <li>{user.phone}</li>
                </ul>
            </div>
        </div>
    );
};

export default MyModal;