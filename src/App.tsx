import React from 'react';
import './App.css';
import {ChuckNorrisPage} from "./t1-ui/ChuckNorrisPage";
import chuckLogo from "../src/common/chucknorris.png"


function App() {
    const chuckLogo1 = chuckLogo;
    return (
        <div className="App">
            <div>
                < img src={chuckLogo1} alt="ChuckLogo" className="ChuckLogo"/>
            </div>
            <ChuckNorrisPage/>
        </div>
    );
}

export default App;
