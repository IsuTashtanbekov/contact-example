import React, {useEffect, useState} from 'react';
import style from './Contacts.module.css'
import { FaUserEdit } from 'react-icons/fa';
import MyModal from "../../../UI/Modal/MyModal";

const Contacts = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [editMode, setEditMode] = useState(true)
    const onNameChangeHandle = (id, e) => {
        props.changeName(id, e.currentTarget.value)
    }

    return (
        <div className={style.contacts}>
            <ul>
                {
                    props.users.users.map( user => {
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
                                           editMode? (
                                               <p>
                                           <input
                                               value={user.name}
                                               onChange={(e) => onNameChangeHandle(user.id, e)}
                                               onClick={e => setEditMode(editMode? false : true)}
                                               autoFocus={true}
                                           />
                                               </p>
                                           ) : (
                                               <p>
                                           <span onClick={e => setEditMode(editMode? false : true)}>
                                               {user.name}
                                           </span>
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
                                       <input
                                           type="text"
                                           value={user.name}
                                       />
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