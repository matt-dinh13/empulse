---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain"
domain: "Requirements Model"
element_id: 1827648
diagrams: 2
connections: 10
tags:
  - requirement
  - requirements-model
---

# 📋 Get application payment channel by its purpose

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain

## 📝 Notes

This object describes the steps, how system gets the data of a payment channel (or multiple payment channels) with the specific purpose from the application.

Input:
- ApplicationCode = unique identifier of the application
- PaymentChannelPurpose = purpose of the payment channel

Output:
- PaymentChannel [0..n] = object of respective payment channel
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and finds the external identifiers of all payment channels associated with the corresponding application (i.e. (Contract->)Temporary_Application->Application_to_Payment_Channel.Payment_Channel_ID identified by ApplicationCode)).
In case there is no such payment channel identifier found, algorithm ends (with no ErrorCode returned to the calling object).
	
- System takes each respective PaymentChannelID (got within the previous step) as well as the PaymentChannelPurpose from the input and gets the data of each corresponding payment channel with the respective purpose by calling the respective REST API provided by the Payments module (i.e. GET GetPaymentChannelRequest) with following input parameters:
   - id = PaymentChannelID
  - purpose = PaymentChannelPurpose 
  - valid = 'TRUE'

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetPaymentChannelResponse and proceeds based on the returned data accordingly - in case no payment channel data are returned (i.e. no payment channel meeting the requested criteria was found), then algorithm ends (with no ErrorCode returned to the calling object).
	
- System takes each received PaymentChannel from the response and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (10)

- ← Dependency: [[01.463 Change repayment channel externally (UseCase 1817775)]]
- ← Dependency: [[{MOD}01.422 Update application DDM]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[Save application payment channel data]]
- ← Dependency: [[Delete application payment channel by its purpose]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[01.669 Change reward payment channel (UseCase 1827890)]]
- ← Dependency: [[{MOD}01.661 Change application disbursement payment channel]]
- ← Dependency: [[01.659 Change application repayment payment channel (UseCase 1833499)]]
- ← Dependency: [[06.020 Update Client Data]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain
- Custom: Operations with application payment channels
