import React, { useEffect, useReducer } from 'react';
import HarUtils from '../utils/HarUtils';
import { init, reducer } from './appReducer';
import RequestsOverview from './RequestsOverview';
import RequestDetails from './RequestDetails';
import './styles/app.scss';

const App = ({ devtools, onRequestFinished }) => {
  const [state, dispatch] = useReducer(reducer, [], init);

  const onRequestDetailsClose = () => {
    dispatch({ type: 'hideRequestDetails' });
  };

  const onRowClick = rowIndex => {
    dispatch({ type: 'updateSelectedRow', payload: rowIndex });
  };

  const handleRequest = har => {
    if (!HarUtils.isGraphQLQuery(har)) {
      return;
    }

    const onHarContentLoaded = content => {
      dispatch({
        type: 'addHarContent',
        payload: HarUtils.convertToTableModel(har, JSON.parse(content)),
      });
    };
    har.getContent(onHarContentLoaded);
  };

  const getHarsFromDevtools = () => {
    devtools.getHAR(rawHar => {
      const graphQLEntries = rawHar.entries.filter(entry => HarUtils.isGraphQLQuery(entry));
      graphQLEntries.forEach(har => {
        handleRequest(har);
      });
    });
  };

  const refreshData = () => {
    dispatch({ type: 'refreshData' });
    getHarsFromDevtools();
  };

  useEffect(() => {
    onRequestFinished.addListener(handleRequest);
  }, [onRequestFinished]);

  useEffect(() => {
    getHarsFromDevtools();
  }, []);

  return (
    <div className="App">
      <div className="left">
        <button type="button" style={{ margin: '0.25rem', cursor: 'pointer' }} onClick={refreshData}>
          Refresh
        </button>
        <RequestsOverview graphQLRequests={state.graphQLRequests} onRowClick={onRowClick} selectedRowIndex={state.selectedRowIndex} detailsPanelExpanded={state.showRight} />
      </div>
      <div className={`right ${state.showRight ? '' : 'hide'}`}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="close" onClick={onRequestDetailsClose} />
        {state.showRight && <RequestDetails request={state.graphQLRequests[state.selectedRowIndex]} />}
      </div>
    </div>
  );
};

export default App;
