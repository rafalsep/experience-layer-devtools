import React from 'react';
import DownlineRequestDetails from './DownlineRequestDetails';
import GraphQLRequestDetails from './GraphQLRequestDetails';
import './styles/reactTabs.scss';
import './styles/requestDetails.scss';

const RequestDetails = ({ request: { har, response } }) => {
  if (!har.getContent) {
    return <DownlineRequestDetails har={har} />;
  }
  return <GraphQLRequestDetails har={har} response={response} />;
};

export default React.memo(RequestDetails);
