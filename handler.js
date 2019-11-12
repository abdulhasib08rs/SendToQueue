'use strict'

const { SQS } = require('aws-sdk')
const sqs = new SQS()

const { sendSqsMessage } = require('./awsHandler')

module.exports.sendToSQS = async event => {
  return await handleErrors(async () => {
    await sendSqsMessage(sqs, event)
    return composeResponse(200, { message: 'Success' })
  })
}

const composeResponse = (statusCode, body) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

const handleErrors = async asyncTask => {
  try {
    return await asyncTask()
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : err
    console.log('ERROR MESSAGE', errorMessage)
    return composeResponse(500, { message: errorMessage })
  }
}
