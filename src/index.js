import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Staking from './Staking';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Pools from './Pools';
import Presale from './Presale';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ThirdwebProvider>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/staking' element={<Staking />} />
    <Route path='/allpools' element={<Pools />} />
    <Route path='/token-presale' element={<Presale />} />
    </Routes>
    </ThirdwebProvider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
