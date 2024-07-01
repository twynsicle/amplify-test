import { DateTime } from 'luxon';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda/trigger/api-gateway-proxy';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = {
    message: 'hello world',
    timestamp: DateTime.now().toISO(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
