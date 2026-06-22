---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Business rules"
domain: "Modules"
element_id: 1148240
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Processing ContractCreditAccountResponse message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Business rules

## 📝 Notes

This business rule describes processing of incoming JMS message (IncomingPaymentResponse) from HoSel and its transformation into comm tables.

Input:

	
- ContractCreditAccountResponse


Algorithm:
System creates a record in the comm table RESULT290 (and sets result event in appropriate record in CREDITACCOUNT210) according to the rule Create RESULT290 record from an incoming message with the following parameters:

	
- message object = ContractCreditAccountResponse
	
- Type message = 210
	
- message Id = ContractCreditAccountResponse.messageId
	
- message result code = ContractCreditAccountResponse.resultCode

As a result of the calling the algorithm the system obtains a record in CommResult enumeration. 


System finds a record in the comm table CREDITACCOUNT210 with Id = ContractCreditAccountResponse.messageId and sets its the following values:

	
- Processed = true
	
- Fail reason =  CommResult.Code if CommResult.IsError = true; otherwise set NULL

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ContractCreditAccountResponse]]

## 📊 Appears In (2 diagrams)

- Custom: Contract - Business rules
- Logical: Contract credit account - Communication model
