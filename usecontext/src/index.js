import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClubsContext from './ClubsContext';
import clubs from './data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ClubsContext.Provider value={{clubs}}>
        <App />
    </ClubsContext.Provider>
);
