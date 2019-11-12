'use strict'

const mockPromise = jest.fn()

const mockSQS = {
  sendMessage: jest.fn()
}

const { sendSqsMessage: sut } = require('../../awsHandler')

describe('Send SQS Message Tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()

    mockSQS.sendMessage.mockReturnValue({ promise: mockPromise })
  })

  it('SUT exists', () => {
    expect.assertions(1)
    expect(sut).toBeDefined()
  })

  it('sends event to queue', async () => {
    const mockEvent = {
      version: '0',
      id: '8b843217-0a7a-d01d-622b-d8d987974077',
      'detail-type': 'JobInsert',
      source: 'jobs',
      account: '778080946765',
      time: '2019-10-28T15:56:39Z',
      region: 'eu-west-2',
      resources: [],
      detail: {
        old: null,
        new: {
          address2: 'gfbg',
          policyStartDate: '2019-10-28T15:56:38.826479+00:00',
          fitAddress1: 'ddsf',
          email: 'g@sadas.com',
          policyHolderName: 'dfdfds',
          vehicleModel: 'dsf',
          contractId: null,
          _sdc_table_version: 1,
          jobType: 'sdfd',
          county: 'dsf',
          last_updated_by_user_name: '1111',
          jobId: 'dsfds',
          policyDeadline: null,
          isBeingActioned: false,
          town: 'dfsf',
          companyId: 1007,
          vehicleMake: 'dsfd',
          createdAt: null,
          contractName: null,
          voucherId: 'dsfd',
          uninstallVehicleModel: 'dsf',
          bookingDate: null,
          uninstallVehicleMake: 'dsf',
          latitude: 'dsf',
          jobState: 'dsf',
          _sdc_batched_at: null,
          easting: 'sdf',
          uninstallVehicleRegistration: 'dfgh',
          _sdc_sequence: 1,
          jobDate: null,
          last_updated_by_id: null,
          vehicleRegistration: 'ddsff',
          jobInstructions: 'dsf',
          bookingTime: 'sdfds',
          engineerId: 22,
          fitAddress2: 'dfd',
          customerAddressId: 22,
          northing: 'dfd',
          jobUniqueIdentifier: 'dfdf',
          address1: 'a',
          insurance: true,
          jobTime: 'dsd',
          policyHolderPhone1: 'dfdf',
          id: '123456796',
          postcode: 'dsfds',
          isOfInterest: true,
          updatedAt: '2019-10-28T15:56:38.826479+00:00',
          vehicle: null,
          longitude: 'dsfd',
          bookedBy: 'dsfds',
          isJobConfirmed: false,
          fitPostcode: 'dsfds',
          policyHolderPhone2: 'dsfsdf',
          fitCounty: 'dsf',
          _sdc_received_at: null,
          fitTown: 'dfds'
        }
      }
    }

    await sut(mockSQS, mockEvent)
    expect.assertions(1)
    expect(mockSQS.sendMessage).toBeCalled()
  })

  it('does not send event to queue', async () => {
    const mockEvent = {
      version: '0',
      id: '8b843217-0a7a-d01d-622b-d8d987974077',
      'detail-type': 'JobInsert',
      source: 'jobs',
      account: '778080946765',
      time: '2019-10-28T15:56:39Z',
      region: 'eu-west-2',
      resources: [],
      detail: {
        old: null,
        new: {
          address2: 'gfbg',
          policyStartDate: '2019-10-28T15:56:38.826479+00:00',
          fitAddress1: 'ddsf',
          email: 'g@sadas.com',
          policyHolderName: 'dfdfds',
          vehicleModel: 'dsf',
          contractId: null,
          _sdc_table_version: 1,
          jobType: 'sdfd',
          county: 'dsf',
          last_updated_by_user_name: '1111',
          jobId: 'dsfds',
          policyDeadline: null,
          isBeingActioned: false,
          town: 'dfsf',
          companyId: 1007,
          vehicleMake: 'dsfd',
          createdAt: null,
          contractName: null,
          voucherId: 'dsfd',
          uninstallVehicleModel: 'dsf',
          bookingDate: null,
          uninstallVehicleMake: 'dsf',
          latitude: 'dsf',
          jobState: 'dsf',
          _sdc_batched_at: null,
          easting: 'sdf',
          uninstallVehicleRegistration: 'dfgh',
          _sdc_sequence: 1,
          jobDate: null,
          last_updated_by_id: null,
          vehicleRegistration: 'ddsff',
          jobInstructions: 'dsf',
          bookingTime: 'sdfds',
          engineerId: 22,
          fitAddress2: 'dfd',
          customerAddressId: 22,
          northing: 'dfd',
          jobUniqueIdentifier: 'dfdf',
          address1: 'a',
          insurance: true,
          jobTime: 'dsd',
          policyHolderPhone1: 'dfdf',
          id: '123456796',
          postcode: 'dsfds',
          isOfInterest: true,
          updatedAt: '2019-10-28T15:56:38.826479+00:00',
          vehicle: null,
          longitude: 'dsfd',
          bookedBy: 'dsfds',
          isJobConfirmed: false,
          fitPostcode: 'dsfds',
          policyHolderPhone2: 'dsfsdf',
          fitCounty: 'dsf',
          _sdc_received_at: null,
          fitTown: 'dfds'
        }
      }
    }

    await sut(mockSQS, mockEvent)
    expect.assertions(1)
    expect(mockSQS.sendMessage).toBeCalled()
  })
})
