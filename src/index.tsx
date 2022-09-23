import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './popupScripts/components/App';
import { consoleLogOnContent } from './popupScripts/utils/log';

export const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(window as any).log = consoleLogOnContent;
declare global {
  var log: (...args: any[]) => void;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
