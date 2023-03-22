import React from 'react';
import Result from "./Result";
import {compose} from "redux";
import {connect} from "react-redux";

const ResultHoc = (props) => {
    return (
        <Result {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        filteredUsers: state.Users.filteredUsers
    }
}

export default compose(
    connect(mapStateToProps)
)(ResultHoc);