---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-570 - OBS interface - Outgoing payments"
domain: "Modules"
element_id: 1415460
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Processing DisbursementConfirmationResponse

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-570 - OBS interface - Outgoing payments

## 📝 Notes

This business rule describes processing of incoming JMS message (DisbursementConfirmationResponse) from HoSel and its transformation into comm tables.

Input:

	
- DisbursementConfirmationResponse


Algorithm:
System creates a record in the comm table RESULT290 (and sets result event in appropriate record in STATEMENT240) according to the rule Create RESULT290 record from an incoming message with the following parameters:

	
- message object = DisbursementConfirmationResponse
	
- Type message = 240
	
- message Id = DisbursementConfirmationResponse.messageID
	
- message result code = DisbursementConfirmationResponse.resultCode

As a result of the calling the algorithm the system obtains a record in ResultsEnum. 

System finds a record in the comm table STATEMENT240 with Id = DisbursementConfirmationResponse.messageID and sets its the following values:

	
- Processed = true
	
- Fail reason = ResultsEnum.Code if ResultsEnum.IsError = true; null otherwise

## 🔗 Connections (3)

- ← Dependency: [[DisbursementConfirmationResponse]]
- → Dependency: [[REQ #2 Message STATEMENT240 (closed-end loand and revolving loan)]]
- ← Dependency: [[DisbursementConfirmationResponse (Class 1602948)]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-570 - OBS interface - Outgoing payments
- Custom: Business rules
- Logical: Outgoing payments - Communication Model
