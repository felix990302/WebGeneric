import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import Button from './components/Button';
import Hello from './components/Hello';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>  
        <App />
        <Hello name="User" enthusiasmLevel={2} />
        <Button
            buttonText="Test"
            handleClick={() => alert("test")}
        />
    </div>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
