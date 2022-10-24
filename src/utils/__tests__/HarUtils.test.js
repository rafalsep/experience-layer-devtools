import HarUtils from '../HarUtils';

test('isGraphQLQuery - should return false for xml responses', () => {
  expect(HarUtils.isGraphQLQuery({ request: { headers: [{ name: 'content-type', value: 'text/xml' }] } })).toBeFalsy();
});

test('isGraphQLQuery - should return true for json responses', () => {
  expect(HarUtils.isGraphQLQuery({ request: { headers: [{ name: 'content-type', value: 'application/json' }], postData: { text: '{"query":"","variables":{}}' } } })).toBeTruthy();
});

test('getGraphQLQuery - should return content for json responses', () => {
  expect(HarUtils.getGraphQLQuery({ request: { headers: [{ name: 'content-type', value: 'application/json' }], postData: { text: '{"query":"","variables":{"input":{}}}' } } })).toEqual({
    query: '',
    variables: {
      input: {},
    },
  });
});
