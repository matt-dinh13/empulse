---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827644
diagrams: 1
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Get application payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system gets the data of the specific payment channel (or multiple payment channels).

Input:
- PaymentChannelID [1..n] = unique identifier of the payment channel

Output:
- PaymentChannel [0..n] = object of respective payment channel
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes each PaymentChannelID from the input and gets the data of the corresponding payment channel by calling the respective REST API provided by the Payments module (i.e. GET GetPaymentChannelRequest) with following input parameters:
   - id = PaymentChannelID
   - valid = 'TRUE'

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetPaymentChannelResponse and proceeds based on the returned data accordingly - in case no data are returned for the requested payment channel(s), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes each received PaymentChannel from the response and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (10)

- ← Dependency: [[{MOD}FinancialType]]
- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency: [[PaymentChannelsType]]
- ← Dependency: [[Application form construction]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]
- ← Dependency: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]
- ← Dependency: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
