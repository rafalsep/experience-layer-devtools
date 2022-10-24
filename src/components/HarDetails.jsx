import React from 'react';
import './styles/harDetails.scss';

const HarDetails = ({ har }) => {
  const renderElement = (title, value) => (
    <div key={`${title}-${value}`}>
      <b>{title}:</b> {value}
    </div>
  );

  return (
    <div className="HarDetails">
      <div className="groupHeader">Request</div>
      <div className="groupContainer">
        {renderElement('Request URL', har.request.url)}
        {renderElement('Method', har.request.method)}
        {har.request.httpVersion && renderElement('HTTP version', har.request.httpVersion)}
        <div className="subGroupHeader">Headers:</div>
        <div className="subgroupContainer">{har.request.headers.map(header => renderElement(header.name, header.value))}</div>
      </div>
      <div className="groupHeader">Response</div>
      <div className="groupContainer">
        {renderElement('Status', har.response.status)}
        <div className="subGroupHeader">Headers:</div>
        <div className="subgroupContainer">{har.response.headers.map(header => renderElement(header.name, header.value))}</div>
      </div>
    </div>
  );
};

export default HarDetails;
