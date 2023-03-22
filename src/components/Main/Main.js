import React from 'react';
import ContactsHoc from "./Contacts/ContactsHoc";
import ResultHoc from "./Result/ResultHoc";

const Main = () => {
    return (
        <main>
            <ResultHoc/>
            <ContactsHoc/>
        </main>
    );
};

export default Main;