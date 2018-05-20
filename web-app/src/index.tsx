import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from './components/Hello';


ReactDOM.render(
    <div>  
        <App />
        <Hello name="TypeScript" enthusiasmLevel={10} />
    </div>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
