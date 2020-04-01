import React from 'react';
import {Provider} from 'react-redux';
import store from './container/store'
import Routing from "./components/Routing";

function App() {
    return (
        <Provider store={store}>
            <Routing/>
        </Provider>
    );
}

export default App;
