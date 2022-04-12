import React from 'react';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
