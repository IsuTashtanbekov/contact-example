import React from 'react';
import Search from "./Search";
import {compose} from "redux";
import {connect} from "react-redux";
import {searchContacts, sortByName} from "../../../store/contact-reducer";

const SearchHoc = (props) => {
    return (
        <div>
            <Search {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default compose(
    connect(mapStateToProps, {sortByName, searchContacts})
)(SearchHoc);