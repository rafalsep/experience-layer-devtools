import HarUtils from '../utils/HarUtils';

export const convertToHarWithData = har => {
  const response = JSON.parse(har.getContent(() => {}));
  const downlineRequests = response?.extensions?.downlineCommunication
    ? response?.extensions?.downlineCommunication.map(downlineCommunication => HarUtils.fromDownlineCommunication(downlineCommunication))
    : [];

  delete response?.extensions?.downlineCommunication;
  return [HarUtils.convertToTableModel(har, response), ...downlineRequests];
};
