---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 1148238
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Generating ContractCreditAccountRequest message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

Input:

	
- record in CREDITACCOUNT210


Algorithm:
System creates a message containing a IncomingPaymentRequest object with the following parameters:

	
- contractCode = according to the rule Get HoSel contract code, passed is CREDITACCOUNT210.IdCredit


	
- creditAccountNumber = CREDITACCOUNT210.Num Account
	
- creditAccountOpenDate = CREDITACCOUNT210.Date Open
	
- messageID = CREDITACCOUNT210.Id

## 🔗 Connections (3)

- → Dependency: [[Get HoSel contract code]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- ← Dependency: [[{DEL}ContractCreditAccountRequest (Class 1713642)]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Contract - Business rules
- Logical: Contract credit account - Communication model
