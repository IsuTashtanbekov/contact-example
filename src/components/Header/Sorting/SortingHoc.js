import React from 'react';
import Sorting from "./Sorting";
import {connect} from "react-redux";
import {compose} from "redux";
import {sortByName} from "../../../store/contact-reducer";

const SortingHoc = (props) => {
    return (
        <Sorting {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        state : state
    }
}

export default compose(
    connect(mapStateToProps, {sortByName})
)(SortingHoc);