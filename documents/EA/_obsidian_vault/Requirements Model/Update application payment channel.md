---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain"
domain: "Requirements Model"
element_id: 1827651
diagrams: 2
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Update application payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain

## 📝 Notes

This object describes the steps, how system updates the data of selected payment channel from the application.

Input:
- ApplicationCode = unique identifier of the application (associated with the payment channel)
- PaymentChannelID = unique identifier of the payment channel
- PaymentChannelData = relevant data of the payment channel to be updated [PaymentChannelType; PaymentChannelSourceType; BankAccountNumber; BankAccountType; BankAccountHolderName; BankBranchCode; BankAccountVerificationResult; SalesroomCode; ExternalCardID]

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the PaymentChannelID from the input and updates the data of the corresponding payment channel by calling the respective REST API provided by the Payments module (i.e. PATCH UpdatePaymentChannelOrDraftRequest) with following input parameters:
   - bankAccount.* //Individual sub-elements are filled-in only if the payment channel type is 'GBA', otherwise null.
       - accountNumber = PaymentChannelData[BankAccountNumber]
       - accountType = PaymentChannelData[BankAccountType] if not null, otherwise 'CA' //Still being discussed with PAYM - default value might be set either by LOR in the REST API request or by PAYM on its backend (while being optional in the REST API request).
       - bankBranchCode = PaymentChannelData[BankBranchCode]
       - bankBranchSyncCode = Bank_Branch[.Code=PaymentChannelData[BankBranchCode]].Synchronization_Code
       - bankCode = "" //Exclude from the REST API request completely.
       - bankName = "" //Exclude from the REST API request completely.
       - holderName = PaymentChannelData[BankAccountHolderName] if not null, otherwise client's full name constructed according to the rule Concatenate person name rules using the respective Temporary_Application[identified by ApplicationCode] attributes //Still being discussed with PAYM - default value might be set either by LOR in the REST API request or by PAYM on its backend (while being optional in the REST API request).
  - contractCode = "" //Exclude from the REST API request completely.
  - dataExchangeId = PaymentChannelID
  - externalCardId = PaymentChannelData[ExternalCardID] if the payment channel type is 'CA', otherwise null
  - externalVerificationResult = PaymentChannelData[BankAccountVerificationResult]
  - purpose = "" //Can be possibly excluded from the REST API request completely (purpose will never change during the loan origination process).
  - salesroomCode = SalesroomCode got according to the rule Select salesroom for application payment channel with ApplicationCode, PaymentChannelType = PaymentChannelData[PaymentChannelType] and SalesroomCode = PaymentChannelData[SalesroomCode] on the input
  - sourceType = PaymentChannelData[PaymentChannelSourceType]
  - targetContract = Contract[identified by ApplicationCode].Contract_Code if the payment channel type is 'OC', otherwise null
  - type = PaymentChannelData[PaymentChannelType]

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on its type accordingly - in case the payment channel was not successfully updated (i.e. for the response with .code <> '200' (OK)), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object.
	
- Algorithm ends.

## 🔗 Connections (9)

- ← Dependency: [[01.463 Change repayment channel externally (UseCase 1817775)]]
- ← Dependency: [[{MOD}01.422 Update application DDM]]
- → Dependency: [[Concatenate person name rules]]
- ← Dependency: [[Save application payment channel data]]
- → Dependency: [[Select salesroom for application payment channel]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[01.669 Change reward payment channel (UseCase 1827890)]]
- ← Dependency: [[{MOD}01.661 Change application disbursement payment channel]]
- ← Dependency: [[01.659 Change application repayment payment channel (UseCase 1833499)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9414 - Remove usage of global parameter DDM_CHANGE_BA_FOR_DCH from LOR domain
- Custom: Operations with application payment channels
