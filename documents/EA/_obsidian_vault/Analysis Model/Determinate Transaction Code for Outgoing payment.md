---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1878542
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Determinate Transaction Code for Outgoing payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Input:
Outgoing payment

Algorithm:
{MOD PAYM-1776 CBL-4723 /}
If  LOAN_CODE_ENABLED = FALSE, then

	
- If the outgoing payment is related to the contract where Contract.ContratType = CEL or SAI then returns null.
	
- If the outgoing payment is related to the contract where Contract.ContratType = REL then returns Contract.Code.

Else

	
- If the outgoing payment is related to the contract where Contract.ContratType = CEL or SAI then returns null.
	
- If the outgoing payment is related to the contract where Contract.ContratType = REL then returns OutgoingPayment.loanCode

{MOD PAYM-1776 CBL-4723 /}

Output:
Transaction Code

## 🔗 Connections (2)

- ← Dependency: [[Found payments]]
- → Dependency: [[REQ#2 Extension of XSD for import disbursement confirmation]]

## 📊 Appears In (2 diagrams)

- Custom: Browse outgoing payments screen
- Custom: PAYM-1410 (CBL-3666) Standalone insurance
