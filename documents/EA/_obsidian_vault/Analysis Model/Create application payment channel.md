---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827652
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Create application payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system creates a new payment channel for the application.

Input:
- ApplicationCode = unique identifier of the application (to be associated with the payment channel)
- PaymentChannelPurpose = purpose of the payment channel
- PaymentChannelData = relevant data of the payment channel to be created [PaymentChannelType; PaymentChannelSourceType; BankAccountNumber; BankAccountType; BankAccountHolderName; BankBranchCode; BankAccountVerificationResult; SalesroomCode; ExternalCardID]

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System creates a new payment channel by calling the respective REST API provided by the Payments module (i.e. POST CreatePaymentChannelDraftRequest) with following input parameters:
   - bankAccount.* //Individual sub-elements are filled-in only if the payment channel type is 'GBA', otherwise null.
       - accountNumber = PaymentChannelData[BankAccountNumber]
       - accountType = PaymentChannelData[BankAccountType] if not null, otherwise 'CA' //Still being discussed with PAYM - default value might be set either by LOR in the REST API request or by PAYM on its backend (while being optional in the REST API request).
       - bankBranchCode = PaymentChannelData[BankBranchCode]
       - bankBranchSyncCode = Bank_Branch[.Code=PaymentChannelData[BankBranchCode]].Synchronization_Code
       - bankCode = "" //Exclude from the REST API request completely.
       - bankName = "" //Exclude from the REST API request completely.
       - holderName = PaymentChannelData[BankAccountHolderName] if not null, otherwise client's full name constructed according to the rule Concatenate person name rules using the respective Temporary_Application[identified by ApplicationCode] attributes //Still being discussed with PAYM - default value might be set either by LOR in the REST API request or by PAYM on its backend (while being optional in the REST API request).
  - externalCardId = PaymentChannelData[ExternalCardID] if the payment channel type is 'CA', otherwise null
  - externalVerificationResult = PaymentChannelData[BankAccountVerificationResult]
  - purpose = PaymentChannelPurpose
  - salesroomCode = SalesroomCode got according to the rule Select salesroom for application payment channel with ApplicationCode, PaymentChannelType = PaymentChannelData[PaymentChannelType] and SalesroomCode = PaymentChannelData[SalesroomCode] on the input
  - sourceType = PaymentChannelData[PaymentChannelSourceType]
  - targetContract = Contract[identified by ApplicationCode].Contract_Code if the payment channel type is 'OC', otherwise null
  - type = PaymentChannelData[PaymentChannelType]

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on its type as follows:
a) In case the payment channel was successfully created (i.e. for the response with .code = '200' (OK)), system performs the following sub-steps:
   - System creates a new record of Application_to_Payment_Channel and links it to the processed application identified by the ApplicationCode (i.e. (Contract->)Temporary_Application->Application_to_Payment_Channel).
   - System saves the value of .dataExchangeId returned within the respective response into Application_to_Payment_Channel.Payment_Channel_ID.
b) Otherwise system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object.
	
- Algorithm ends.

## 🔗 Connections (3)

- → Dependency: [[Concatenate person name rules]]
- ← Dependency: [[Save application payment channel data]]
- → Dependency: [[Select salesroom for application payment channel]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
