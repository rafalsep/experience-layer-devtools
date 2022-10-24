import React from 'react';
import App from '../components/App';
import getSeatMapFlight from './fixtures/getSeatMapFlight';
import reservationMyb from './fixtures/reservationMyb';
import cancelSegmentsError from './fixtures/cancelSegmentsError';
import calculateETktExchangeCost from './fixtures/calculateETktExchangeCost';
import bookingAirSearch from './fixtures/bookingAirSearch';
import bookingAddItineraryError from './fixtures/bookingAddItineraryError';
import getAirAvailability from './fixtures/getAirAvailability';
import ignoreTransaction from './fixtures/ignoreTransaction';
import updateReservation from './fixtures/updateReservation';
import timaticCountry from './fixtures/timaticCountry';
import { convertToHarWithData } from './fixturesConverter';

export default {
  title: 'App',
  component: App,
  argTypes: {},
};

const Template = args => <App {...args} />;

export const NoData = Template.bind({});
NoData.args = {
  initialRequests: [],
  onRequestFinished: {
    addListener: () => {},
  },
};

export const DynamicQuery = Template.bind({});
DynamicQuery.args = {
  initialRequests: [],
  onRequestFinished: {
    addListener: callback => {
      callback(getSeatMapFlight);
    },
  },
};

export const StaticMutationError = Template.bind({});
StaticMutationError.args = {
  initialRequests: convertToHarWithData(cancelSegmentsError),
  onRequestFinished: {
    addListener: () => {},
  },
};

export const MultipleCalls = Template.bind({});
MultipleCalls.args = {
  initialRequests: [
    ...convertToHarWithData(getSeatMapFlight),
    ...convertToHarWithData(getAirAvailability),
    ...convertToHarWithData(ignoreTransaction),
    ...convertToHarWithData(cancelSegmentsError),
    ...convertToHarWithData(calculateETktExchangeCost),
    ...convertToHarWithData(bookingAirSearch),
    ...convertToHarWithData(bookingAddItineraryError),
    ...convertToHarWithData(updateReservation),
    ...convertToHarWithData(timaticCountry),

    ...convertToHarWithData(getSeatMapFlight),
    ...convertToHarWithData(getAirAvailability),
    ...convertToHarWithData(ignoreTransaction),
    ...convertToHarWithData(cancelSegmentsError),
    ...convertToHarWithData(calculateETktExchangeCost),
    ...convertToHarWithData(bookingAirSearch),
    ...convertToHarWithData(bookingAddItineraryError),
    ...convertToHarWithData(updateReservation),
    ...convertToHarWithData(timaticCountry),
  ],
  onRequestFinished: {
    addListener: callback => {
      callback(reservationMyb);
    },
  },
};
