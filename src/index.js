import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

 export const MyContext = React.createContext  ({
  valueLight : 'DAY', valueNight : 'Night'
}); 
root.render(
  <React.StrictMode>   
    <MyContext.Provider value={{
  valueLight : 'DAY', valueNight : 'Night'
}}>
        <App />
    </MyContext.Provider>   
  </React.StrictMode>
);
