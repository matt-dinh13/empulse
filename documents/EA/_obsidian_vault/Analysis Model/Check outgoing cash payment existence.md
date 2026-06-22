---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Use Case Model"
domain: "Analysis Model"
element_id: 1701815
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check outgoing cash payment existence

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Use Case Model

## 📝 Notes

This rule describes checking possibility of a cash outgoing payment for defined consolidating contract

Input:

	
- Contract


Output:

	
- Result (boolean) = FALSE


Get CashPaymentAmount by Compute cash loan disbursement amount with Contract as parameter
Result = If CashPaymentAmount > 0 set Result to TRUE

## 🔗 Connections (1)

- ← Dependency: [[01.380 Prepare Contract for Consolidation]]

## 📊 Appears In (1 diagrams)

- Use Case: Loan consolidation - use case model
