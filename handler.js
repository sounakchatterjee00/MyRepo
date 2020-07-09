'use strict';
const moment = require('moment')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v7.0! Your function executed successfully!new line added 90',
        input: event,
        timestamp : moment().unix()
      },
      null,
      2
    ),
  };
};
