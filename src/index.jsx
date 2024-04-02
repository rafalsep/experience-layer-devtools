import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/main.scss';

const root = createRoot(document.getElementById('app'));

window.panelCreated = function appInit(devtools) {
  root.render(<App onRequestFinished={devtools.network.onRequestFinished} devtools={devtools} />);
};
