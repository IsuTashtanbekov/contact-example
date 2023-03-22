import React, {useState} from 'react';
import Header from "./components/Header/Header";
import './App.css'
import Main from "./components/Main/Main";

const App = () => {
    const [users, setUsers] = useState(null)
    return (
        <div className='App'>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;