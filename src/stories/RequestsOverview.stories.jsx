import React from 'react';
import reservationMyb from './fixtures/reservationMyb';
import getAirAvailability from './fixtures/getAirAvailability';
import { convertToHarWithData } from './fixturesConverter';

import RequestsOverview from '../components/RequestsOverview';

export default {
  title: 'RequestsOverview',
  component: RequestsOverview,
  argTypes: {},
};

const Template = args => <RequestsOverview {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  graphQLRequests: [...convertToHarWithData(reservationMyb), ...convertToHarWithData(getAirAvailability)],
};
