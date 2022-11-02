import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

/* const Element = () => {
  return <div>my first page</div>
} */

/* const span = React.createElement('span', {}, `I'm span`)
const element = React.createElement('h1', {
  className: 'my-claass',
}, span) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

