import React, {useState} from 'react';
import style from './Contacts.module.css'
import { FaUserEdit } from 'react-icons/fa';
import { MdOutlineModeEdit } from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';
import MyModal from "../../../UI/Modal/MyModal";

const Contacts = (props) => {

    console.log(props.changeName)

    const [modalActive, setModalActive] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const onNameChangeHandle = (id, e) => {
        let text = e.currentTarget.value
        props.changeName(id, text)
    }

    const onUsernameChangeHandle = (id, e) => {
        let text = e.currentTarget.value
        props.changeUsername(id, e)
    }


    return (
        <div className={style.contacts}>
            <ul>
                {
                    props.users.users.map(user => {
                        return <li
                            key={user.id}
                            className={style.list}
                        >
                            <div className={style.contactInfo}>
                                <div>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW__zBeHuxPzCFny7DKWMlPCH1alAeZ3ftnjYsN4ZMqIafLPWMtansAzxxJbuIFWLo0&usqp=CAU"
                                        alt="default-user-photo"
                                        className={style.userPhoto}
                                    />
                                    <div className={style.descriptionUser}>
                                        <p>
                                           <span>
                                               {user.username}
                                           </span>
                                        </p>
                                        {
                                            editMode ? (
                                                <p>
                                                    <input
                                                        value={user.name}
                                                        onChange={event => onNameChangeHandle(user.id, event)}
                                                        autoFocus={true}
                                                        className={style.input}
                                                    />
                                                    <button
                                                        className={style.btn}
                                                        onClick={e => setEditMode(false)}
                                                    >
                                                        <GoChecklist/>
                                                    </button>
                                                </p>
                                            ) : (
                                                <p>
                                           <span>
                                               {user.name}
                                           </span>
                                                    <button
                                                        className={style.btn}
                                                        onClick={e => setEditMode(true)}
                                                    >
                                                        <MdOutlineModeEdit/>
                                                    </button>
                                                </p>
                                            )
                                        }
                                        <p>
                                           <span>
                                               {user.email}
                                           </span>
                                        </p>
                                        <p>
                                           <span>
                                               {user.phone}
                                           </span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <MyModal
                                        active={modalActive}
                                        setActive={setModalActive}
                                        user={user}
                                    >
                                        <div>
                                            Здесь будет данные о пользователях!
                                        </div>
                                    </MyModal>
                                    <button
                                        className={style.btn}
                                        onClick={() => setModalActive(true)}
                                    >
                                        <FaUserEdit/>
                                    </button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Contacts;