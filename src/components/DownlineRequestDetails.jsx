import React from 'react';
import ReactJson from 'react-json-view';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import XMLViewer from 'react-xml-viewer';
import ErrorBoundary from './ErrorBoundary';
import HarDetails from './HarDetails';
import { resolveLogsLink } from './logsLinkResolver';

const DownlineRequestDetails = ({ har }) => {
  const logsLink = resolveLogsLink(har);

  return (
    <Tabs className="RequestDetails">
      <TabList>
        <Tab>Request</Tab>
        <Tab>Response</Tab>
        <Tab>Details</Tab>
        {logsLink && <Tab>Logs</Tab>}
      </TabList>
      <TabPanel>
        <ErrorBoundary>
          <div style={{ maxHeight: '100vh' }}>
            {har.request.headers.some(({ name, value }) => name.toLowerCase() === 'content-type' && value.includes('xml')) ? (
              <XMLViewer xml={har.request.data} collapsible />
            ) : (
              <ReactJson src={har.request.data} indentWidth={2} collapsed={5} name={null} displayObjectSize={false} displayDataTypes={false} enableClipboard={false} collapseStringsAfterLength={100} />
            )}
          </div>
        </ErrorBoundary>
      </TabPanel>
      <TabPanel>
        <ErrorBoundary>
          <div style={{ maxHeight: '100vh' }}>
            {har.response.headers.some(({ name, value }) => name === 'content-type' && value.includes('xml')) ? (
              <XMLViewer xml={har.response.data} collapsible />
            ) : (
              <ReactJson
                src={har.response.data}
                indentWidth={2}
                collapsed={5}
                name={null}
                displayObjectSize={false}
                displayDataTypes={false}
                enableClipboard={false}
                collapseStringsAfterLength={100}
              />
            )}
          </div>
        </ErrorBoundary>
      </TabPanel>
      <TabPanel>
        <ErrorBoundary>
          <HarDetails har={har} />
        </ErrorBoundary>
      </TabPanel>
      {logsLink && (
        <TabPanel>
          <ErrorBoundary>
            <div className="logs">
              <a className="logs-link" target="_blank" rel="noreferrer" href={logsLink}>
                Logs Link
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="16px" height="16px">
                  <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                </svg>
              </a>
            </div>
          </ErrorBoundary>
        </TabPanel>
      )}
    </Tabs>
  );
};

export default DownlineRequestDetails;
