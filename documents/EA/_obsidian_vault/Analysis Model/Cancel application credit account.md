---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model"
domain: "Analysis Model"
element_id: 1878444
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel application credit account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model

## 📝 Notes

This object describes the steps, how system cancels the credit account associated with the selected application.

Input:
- ApplicationCode = unique identifier of the application

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and cancels the credit account associated with the corresponding application by calling the CancelAccountRequest (method of AccountManagementWS) with following input parameters:
   - cancelItems.accountNumber = Contract[.Contract_Code=ApplicationCode].Credit_Account_Number

In case of failure, system logs the respective error and returns the 'MSG_CABUS_UNAVAILABLE' as ErrorCode to the calling object.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- ← Dependency: [[01.670 Cancel contract automatically (UseCase 1850513)]]

## 📊 Appears In (2 diagrams)

- Use Case: Cancel contract automatically
- Use Case: Cancel contract manually
