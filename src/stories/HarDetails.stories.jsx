import React from 'react';

import HarDetails from '../components/HarDetails';

export default {
  title: 'HarDetails',
  component: HarDetails,
  argTypes: {},
};

const Template = args => <HarDetails {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  har: {
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '317155',
    request: {
      method: 'POST',
      url: 'https://develop.sab-dev-ts-dw-explyr-8756.dev.sabre-gcp.com/graphql?downlineEnv=cert',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br',
        },
        {
          name: 'Accept-Language',
          value: 'en-GB,en-US;q=0.9,en;q=0.8,pl;q=0.7,da;q=0.6',
        },
        {
          name: 'Cache-Control',
          value: 'no-cache',
        },
        {
          name: 'Connection',
          value: 'keep-alive',
        },
        {
          name: 'Content-Length',
          value: '1424',
        },
        {
          name: 'DNT',
          value: '1',
        },
        {
          name: 'Host',
          value: 'develop.sab-dev-ts-dw-explyr-8756.dev.sabre-gcp.com',
        },
        {
          name: 'Origin',
          value: 'https://dx.dai11.dev.aws.sabre.com',
        },
        {
          name: 'Pragma',
          value: 'no-cache',
        },
        {
          name: 'Referer',
          value: 'https://dx.dai11.dev.aws.sabre.com/',
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty',
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors',
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'cross-site',
        },
        {
          name: 'User-Agent',
          value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
        {
          name: 'accept',
          value: '*/*',
        },
        {
          name: 'application-id',
          value: 'SWS1:SBR-InteractDX:0f07729a4c',
        },
        {
          name: 'content-type',
          value: 'application/json',
        },
        {
          name: 'conversation-id',
          value: 'InteractDX|97412ca0-fd73-11ec-985e-238a179f21e0|0c349c',
        },
        {
          name: 'message-id',
          value: 'InteractDX|97412ca0-fd73-11ec-985e-238a179f21e0|0c349c|c7a6985e-1ff1-4a53-9ea8-7ddbe3e88881',
        },
        {
          name: 'sec-ch-ua',
          value: '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0',
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"',
        },
        {
          name: 'x-sabre-airline',
          value: 'VA',
        },
        {
          name: 'x-sabre-security-token',
          value: 'Shared/IDL:IceSess\\/SessMgr:1\\.0.IDL/Common/!ICESMS\\/ACPCRTD!ICESMSLB\\/CRT.LB!1657143346582!7479!517!1!E2E-1',
        },
      ],
      queryString: [
        {
          name: 'downlineEnv',
          value: 'cert',
        },
      ],
      cookies: [],
      headersSize: 1146,
      bodySize: 1424,
      postData: {
        mimeType: 'application/json',
        text: '{"operationName":"getSeatMapFlight","variables":{"input":{"flightCriteria":{"airline":"VA","departureAirport":"BNE","departureDate":"2022-07-06","operatingAirline":"VA","operatingFlightNumber":"912","flightNumber":"912"}}},"extensions":{},"query":"query getSeatMapFlight($input: JseatsFlightSeatMapRequestInput!) {\\n  pnr {\\n    seatMapFlight(input: $input) {\\n      seatMap {\\n        seatMap {\\n          id\\n          cabin {\\n            bookingClass\\n            row {\\n              isExitRow\\n              isBassinetRow\\n              number\\n              slot {\\n                id\\n                location\\n                seat {\\n                  isExitRowSeat\\n                  seatType\\n                  rearFacing\\n                  number\\n                  seatOcupation\\n                  status\\n                  seatLocation\\n                  limitation\\n                  chargeable\\n                  exitRowDisclaimer\\n                }\\n              }\\n            }\\n            column {\\n              columnRef\\n              id\\n              name\\n              location\\n            }\\n            firstRow\\n            lastRow\\n            cabinLocation\\n            id\\n            passengerBlockedSeats {\\n              blockCode\\n              number\\n              isBlockCodeSelectable\\n              passengerRefs\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Access-Control-Allow-Credentials',
          value: 'true',
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'https://dx.dai11.dev.aws.sabre.com',
        },
        {
          name: 'Access-Control-Expose-Headers',
          value: 'Session-ID,Authorization,Access-Control-Allow-Origin,Access-Control-Allow-Credentials,GCE-Name,Access-Control-Max-Age',
        },
        {
          name: 'Connection',
          value: 'keep-alive',
        },
        {
          name: 'Content-Encoding',
          value: 'gzip',
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8',
        },
        {
          name: 'Date',
          value: 'Wed, 06 Jul 2022 21:39:08 GMT',
        },
        {
          name: 'ETag',
          value: 'W/"d385-XTwOB3GKiMKJNn1Nn+tRau37SiY"',
        },
        {
          name: 'GCE-Name',
          value: 'experience-layer-develop-17fr',
        },
        {
          name: 'Keep-Alive',
          value: 'timeout=5',
        },
        {
          name: 'Transfer-Encoding',
          value: 'chunked',
        },
        {
          name: 'Vary',
          value: 'Origin, Accept-Encoding',
        },
        {
          name: 'X-Powered-By',
          value: 'Express',
        },
      ],
      cookies: [],
      content: {
        size: 54149,
        mimeType: 'application/json',
        compression: 51554,
      },
      redirectURL: '',
      headersSize: 596,
      bodySize: 2595,
      _transferSize: 3191,
      _error: null,
    },
    serverIPAddress: '10.128.112.165',
    startedDateTime: '2022-07-06T21:39:07.548Z',
    time: 1363.391999999294,
    timings: {
      blocked: 463.9309999911143,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.08000000000000002,
      wait: 749.3280000033342,
      receive: 150.05300000484567,
      _blocked_queueing: 463.75899999111425,
    },
  },
};
