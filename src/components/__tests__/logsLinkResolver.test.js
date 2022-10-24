import { resolveLogsLink } from '../logsLinkResolver';

jest.useFakeTimers();
jest.setSystemTime(new Date(2023, 3, 1));

test('Should return dcci logs link', () => {
  expect(
    resolveLogsLink({
      request: {
        url: 'https://api-crt.cert.havail.sabre.com/v917/dcci/seats/seatmap/flight?jipcc=VAIR',
        headers: [{ name: 'conversation-id', value: 'InteractDX|b8acb820-0da7-11ed-92ae-b398c6e5c2d9|1e0b84' }],
      },
    }),
  ).toEqual('http://dcci65.as.cert.ascint.sabrecirrus.com/se.checkin.server/static/dcci-elk.html#0:5k:tmo00:tqdc0:b8acb820-0da7-11ed-92ae-b398c6e5c2d9');
});

test('Should return dc logs link', () => {
  expect(
    resolveLogsLink({
      request: {
        url: 'https://api-crt.cert.havail.sabre.com/v5/dcp/extras/ignoreTransaction?jipcc=VAIR',
        headers: [{ name: 'x-sabre-conversation-id', value: 'InteractDX|b8acb820-0da7-11ed-92ae-b398c6e5c2d9|1e0b84' }],
      },
    }),
  ).toEqual('http://elk2lgrep1.as.cert.ascint.sabrecirrus.com/dcmcall?query=b8acb820-0da7-11ed-92ae-b398c6e5c2d9');
});

test('Should not resolve logs link for cki', () => {
  expect(
    resolveLogsLink({
      request: {
        url: 'https://api-crt.cert.havail.sabre.com/v3/cki/flight/passengerlist?jipcc=VAIR',
        headers: [{ name: 'conversation-id', value: 'InteractDX|1922a460-16f6-11ed-a707-b5aa693ee1ef|7cca53' }],
      },
    }),
  ).toBeUndefined();
});
