import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // pour dire à quel neoud on va brancher notre App, ici à l'élément root dans index.html
  <React.StrictMode>
    // pour afficher des element en cas de problème
    <App />
  </React.StrictMode>
);
