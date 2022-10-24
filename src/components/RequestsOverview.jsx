import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import formatBytes from '../utils/formatBytes';
import './styles/requestsOverview.scss';

const RequestsOverview = ({ graphQLRequests, onRowClick, selectedRowIndex, detailsPanelExpanded }) => {
  const columns = [
    {
      Header: 'Operation',
      accessor: 'operation',
      Cell: row => {
        if (!['query', 'mutation'].includes(row.original?.type)) {
          return (
            <div style={{ marginLeft: '0.25rem' }}>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z" />
              </svg>
              <span style={{ marginLeft: '0.25rem' }}>{row.value}</span>
            </div>
          );
        }
        return <span>{row.value}</span>;
      },
      headerStyle: { textAlign: 'left' },
      style: { cursor: 'pointer' },
    },
    {
      Header: 'Timestamp',
      accessor: 'timestamp',
      maxWidth: 100,
      show: !detailsPanelExpanded,
      headerStyle: { textAlign: 'left' },
      style: { cursor: 'pointer' },
    },
    {
      Header: 'Type',
      accessor: 'type',
      show: !detailsPanelExpanded,
      maxWidth: 70,
      headerStyle: { textAlign: 'left' },
      style: { cursor: 'pointer', textTransform: 'lowercase' },
    },
    {
      Header: 'Status',
      accessor: 'status',
      show: !detailsPanelExpanded,
      maxWidth: 60,
      headerStyle: { textAlign: 'left' },
      style: { cursor: 'pointer' },
    },
    {
      Header: 'Size',
      accessor: 'size',
      Cell: ({ value }) => <span>{formatBytes(value)}</span>,
      show: !detailsPanelExpanded,
      maxWidth: 90,
      headerStyle: { textAlign: 'left' },
      style: { textAlign: 'right', cursor: 'pointer' },
    },
    {
      Header: 'Time',
      accessor: 'time',
      Cell: ({ value }) => <span>{Math.round(value)}&nbsp;ms</span>,
      show: !detailsPanelExpanded,
      maxWidth: 80,
      headerStyle: { textAlign: 'left' },
      style: { textAlign: 'right', cursor: 'pointer' },
    },
  ];

  return (
    <div className="RequestsOverview">
      <ReactTable
        className="-highlight"
        data={graphQLRequests}
        columns={columns}
        minRows={1}
        showPageSizeOptions={false}
        showPagination={false}
        pageSize={1000}
        getTrProps={(state, rowInfo) => {
          const trProps = { style: {} };
          if (rowInfo?.index === selectedRowIndex) {
            trProps.style.background = '#ddeeff';
          }
          if (rowInfo?.row?.status >= 400 || rowInfo?.original.response?.extensions?.status === 'ERROR') {
            trProps.style.color = 'red';
          }
          if (!['query', 'mutation'].includes(rowInfo?.row?.type)) {
            trProps.className = 'downline';
          }

          return trProps;
        }}
        getTdProps={(state, rowInfo) => ({
          onClick: (e, handleOriginal) => {
            onRowClick(rowInfo.index);
            if (handleOriginal) {
              handleOriginal();
            }
          },
        })}
      />
    </div>
  );
};

export default RequestsOverview;
