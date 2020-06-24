'use strict';
const moment = require('moment')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless v7.0! function executed successfully!',
        input: event,
        timestamp : moment().unix()
      },
      null,
      2
    ),
  };
};
