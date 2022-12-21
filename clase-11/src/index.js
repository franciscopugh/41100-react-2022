import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CarritoProvider } from './context/CarritoContex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
      <App />
    </CarritoProvider> 
);
//Stric Mode ejecuta dos veces