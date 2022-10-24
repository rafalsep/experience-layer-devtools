import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import HarUtils from './utils/HarUtils';
import './styles/main.scss';

let root;
const initialRequests = [];

window.panelCreated = function appInit(devtools) {
  if (!root) {
    root = createRoot(document.getElementById('app'));
    devtools.network.getHAR(async har => {
      const graphQLEntries = har.entries.filter(entry => HarUtils.isGraphQLQuery(entry));
      for (let i = 0; i < graphQLEntries.length; i++) {
        const request = graphQLEntries[i];
        const response = await new Promise(resolve => {
          const onHarContentLoaded = content => {
            resolve(JSON.parse(content));
          };
          request.getContent(onHarContentLoaded);
        });
        initialRequests.push(HarUtils.convertToTableModel(request, response));
        const downlineRequests = response?.extensions?.downlineCommunication
          ? response?.extensions?.downlineCommunication.map(downlineCommunication => HarUtils.fromDownlineCommunication(downlineCommunication))
          : [];
        delete response?.extensions?.downlineCommunication;
        initialRequests.push(...downlineRequests);
      }
      root.render(<App onRequestFinished={devtools.network.onRequestFinished} initialRequests={initialRequests} />);
    });
  } else {
    root.render(<App onRequestFinished={devtools.network.onRequestFinished} initialRequests={initialRequests} />);
  }
};
