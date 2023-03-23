import React, {useEffect} from 'react';
import Contacts from "./Contacts";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeName, changeUsername, setUsers} from "../../../store/contact-reducer";
import axios from 'axios'

const ContactsHoc = (props) => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then( result => {
            props.setUsers(result.data)
        })
    }, [])
    return (
        <Contacts {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.Users,
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        changeName,
        changeUsername,
    })
)(ContactsHoc);