import HarUtils from '../utils/HarUtils';

const init = initialHarRequests => ({ har: null, query: 'query {}', variables: '{}', response: {}, showRight: false, graphQLRequests: initialHarRequests, selectedRowIndex: -1 });

const reducer = (state, action) => {
  switch (action.type) {
    case 'hideRequestDetails':
      return { ...state, showRight: false, selectedRowIndex: -1 };
    case 'addHarContent': {
      const downlineRequests = action.payload?.response?.extensions?.downlineCommunication
        ? action.payload?.response?.extensions?.downlineCommunication.map(downlineCommunication => HarUtils.fromDownlineCommunication(downlineCommunication))
        : [];

      delete action.payload?.response?.extensions?.downlineCommunication;
      return { ...state, graphQLRequests: [...state.graphQLRequests, action.payload, ...downlineRequests] };
    }
    case 'updateSelectedRow':
      return { ...state, selectedRowIndex: action.payload, showRight: true };
    default:
      throw new Error();
  }
};

export { init, reducer };
