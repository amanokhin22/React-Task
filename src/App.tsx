import React from 'react';
import {Counter} from './features/counter/Counter';
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Counter/>}/>
            </Routes>
        </div>
    );
}

export default App;
