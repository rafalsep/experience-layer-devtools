import sizeof from 'object-sizeof';

export default class HarUtils {
  static postData(har) {
    return Object.prototype.hasOwnProperty.call(har, 'request') && Object.prototype.hasOwnProperty.call(har.request, 'postData') && Object.prototype.hasOwnProperty.call(har.request.postData, 'text')
      ? har.request.postData.text
      : '';
  }

  static isJson(har) {
    return HarUtils.isContentType(har, 'application/json');
  }

  static isContentType(har, contentType) {
    const lowercaseContentType = contentType.toLowerCase();
    return har.request.headers.some(header => header.name.toLowerCase() === 'content-type' && header.value.split(';')[0].toLowerCase() === lowercaseContentType);
  }

  static parseVariables(jsonStringOrObject) {
    try {
      return typeof jsonStringOrObject === 'object' ? jsonStringOrObject : JSON.parse(jsonStringOrObject);
    } catch (e) {
      console.error('parseVariables ERROR', e);
    }
    return {};
  }

  static isGraphQLQuery(har) {
    const query = this.getGraphQLQuery(har);
    return Object.prototype.hasOwnProperty.call(query, 'query');
  }

  static getGraphQLQuery(har) {
    if (!this.isJson(har)) {
      return {};
    }

    try {
      const data = JSON.parse(this.postData(har));
      if (Object.prototype.hasOwnProperty.call(data, 'query')) {
        return {
          query: data.query,
          variables: Object.prototype.hasOwnProperty.call(data, 'variables') ? this.parseVariables(data.variables) : {},
        };
      }
    } catch (e) {
      console.error('getGraphQLQuery ERROR', e);
    }
    return {};
  }

  static fromDownlineCommunication(downlineCommunication) {
    return {
      ...downlineCommunication,
      size: downlineCommunication.rsHeaders['content-length'] || Math.floor(sizeof(downlineCommunication.response) / 2),
      har: {
        request: {
          url: downlineCommunication.url,
          method: downlineCommunication.type,
          headers: Object.entries(downlineCommunication.rqHeaders).map(([name, value]) => ({ name, value })),
          data: downlineCommunication.request,
        },
        response: {
          status: downlineCommunication.status,
          headers: Object.entries(downlineCommunication.rsHeaders).map(([name, value]) => ({ name, value })),
          data: downlineCommunication.response,
        },
      },
    };
  }

  static convertToTableModel(har, response) {
    const text = JSON.parse(har.request.postData.text);
    return {
      har,
      url: har.request.url,
      operation: text.operationName,
      type: text.query.startsWith('mutation') ? 'mutation' : 'query',
      status: har.response.status,
      size: har.response.content.size,
      time: har.time - har.timings.blocked,
      timestamp: new Date(har.startedDateTime).toTimeString().split(' ')[0],
      response,
    };
  }
}
