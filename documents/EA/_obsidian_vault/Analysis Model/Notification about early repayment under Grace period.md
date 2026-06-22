---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1544238
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Notification about early repayment under Grace period

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

Notification is based on data selection from DWH database. Selected data will be processed by Message server.
Notification code: SMS_GRACE_PAYMENT_GRANTED
Receiver: Client of contract (active mobile number)
Period of selection: daily

Selected contracts:
Contracts in status Finished (K) which were closed after the previous selection (message generation) where reason of finishing is Grace period (ContractStatusTransition.Reason = ‚GRACE_PERIOD‘).

Content of notification:

	
- contract number
	
- date of contract finishing = date of contract status transition to status Finished (K) 

Text of message is defined by template linked with notification code.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}08.220 Check and process Grace period]]

## 📊 Appears In (1 diagrams)

- Use Case: Grace period processing
