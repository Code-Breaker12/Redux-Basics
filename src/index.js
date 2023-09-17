import { createRoot } from 'react-dom/client';
// import App from './containers/app';
import App from './App';
import './store.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
