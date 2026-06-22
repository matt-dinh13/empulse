---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case"
domain: "Analysis Model"
element_id: 1558633
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Notification about granting of Gift payment

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case

## 📝 Notes

Notification is based on data selection from DWH database. Selected data will be processed by Message server.
Notification code: SMS_GIFT_PAYMENT_GRANTED
Receiver: Client of contract (active mobile number)
Period of selection: daily

Selected contracts:
Contracts where exists Business event where Type = GIFT_PAYMENT_GRANTED

Content of notification:

	
- contract number
	
- number of gift payments = contract.ContractService.Service.GiftPaymentService.NumberOfGiftPayments
	
- date of GP granting = Business event.Time of modification

Text of message is defined by template linked with notification code.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (2 diagrams)

- Use Case: Full early repayment processing
- Use Case: Gift payment processing
