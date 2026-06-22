---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879505
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get Installment Plan data from ASQ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

This rule describes how to get Instalment Plan data related to a transaction sales quote from the ASQ
 

	
- System calls GET ASQ .../api/recalculation with input parameters:
- accountNumber = Contract Supplement ->Contract.Account Number
- date = current_date
- salesQuoteCode = Account Transaction Supplement.Chosen Offer Id
- transactionType = {DEL CSI-3526}Account Transaction Supplement.Loan Type{/DEL}{ADD CSI-3526}Account Transaction Supplement.Transaction Type{/ADD}
	
- System returns the ASQ result. If ASQ component is unavailable (timeout), system returns error message of MSG_ASQ_NOT_AVAILABLE; e.g. ASQ system is not available.

## 🔗 Connections (2)

- ← Dependency: [[HO_ALOP_DATA filling rules]]
- ← Dependency: [[LoanParameters]]

## 📊 Appears In (2 diagrams)

- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
