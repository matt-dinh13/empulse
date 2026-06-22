---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/UseCase Model"
domain: "Analysis Model"
element_id: 1798273
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Update Contract Bank Account rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/UseCase Model

## 📝 Notes

This rule describes update Contract Bank Account when disbursement or refund bank account is changed.
 

	
- Reference to the original Bank Account is set as inactive (i.e. Contract Bank Account.Acive Flag = FALSE)
	
- A new record with reference to the new Bank Account is created with following data:
- Purpose = 'DIS' or 'RFN' {ADD CBL-4827 PAYM-1828}or 'EMI' {/ADD} according to changed bank account purpose
- Active Flag = TRUE

## 🔗 Connections (3)

- ← Dependency: [[05.517 Process refund Disbursement channel change request (UseCase 1796952)]]
- ← Dependency: [[01.663 Edit refunds disbursement channel]]
- ← Dependency: [[{MOD}01.662 Change disbursement channel]]

## 📊 Appears In (2 diagrams)

- Use Case: Change disbursement channel
- Use Case: Change refunds disbursement channel
