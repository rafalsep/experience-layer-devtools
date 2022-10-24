const resolveLogsLink = ({ request }) => {
  const { pathname } = new URL(request.url);
  const conversationId = encodeURI(
    (request.headers.find(({ name }) => name.toLowerCase() === 'conversation-id')?.value || request.headers.find(({ name }) => name.toLowerCase() === 'x-sabre-conversation-id')?.value || '').split(
      '|',
    )[1],
  );
  if (/\/[^/]+\/dcci.*/.test(pathname)) {
    const from = Math.floor((new Date().setDate(new Date().getDate() - 1) - new Date('2021-09-01 00:00:00.000').getTime()) / 1000).toString(36);
    const to = Math.ceil((new Date().setDate(new Date().getDate() + 1) - new Date('2021-09-01 00:00:00.000').getTime()) / 1000).toString(36);
    return `http://dcci65.as.cert.ascint.sabrecirrus.com/se.checkin.server/static/dcci-elk.html#0:5k:${from}:${to}:${conversationId}`;
  }
  if (/\/[^/]+\/dc.*/.test(pathname)) {
    return `http://elk2lgrep1.as.cert.ascint.sabrecirrus.com/dcmcall?query=${conversationId}`;
  }
  return undefined;
};

export { resolveLogsLink };
