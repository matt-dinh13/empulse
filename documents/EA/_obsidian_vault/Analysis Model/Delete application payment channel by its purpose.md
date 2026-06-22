---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827646
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Delete application payment channel by its purpose

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system deletes the payment channel with the specific purpose from the application.

Input:
- ApplicationCode = unique identifier of the application
- PaymentChannelPurpose = purpose of the payment channel

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode and PaymentChannelPurpose from the input and gets the data of the corresponding application's payment channel according to the rule Get application payment channel by its purpose with respective parameters on the input.
In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object and algorithm ends.
	
- In case the payment channel with the respective purpose exists on the processed application (i.e. data of such payment channel were returned within the previous step), system archives the corresponding Contract_to_Payment_Channel record (i.e. sets Contract->Contract_to_Payment_Channel[.Payment_Channel_ID=PaymentChannel.dataExchangeID].Archived = TRUE).
	
- Algorithm ends.

## 🔗 Connections (3)

- → Dependency: [[Get application payment channel by its purpose]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
