'use strict'

const composeParams = (msgBody, msgGroupId) => {
  return {
    MessageBody: msgBody,
    QueueUrl: process.env.SqsUrl,
    MessageGroupId: msgGroupId
  }
}

module.exports.sendSqsMessage = async (sqs, event) => {
  const params = composeParams(JSON.stringify(event), 'jobs')
  return await sqs.sendMessage(params).promise()
}
