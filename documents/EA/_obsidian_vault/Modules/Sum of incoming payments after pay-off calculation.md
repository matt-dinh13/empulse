---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877485
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Sum of incoming payments after pay-off calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Calculation of sum of incoming payments from the moment of contract's last transition to status L (Paid off)

Input
Contract

Algorithm

	
- If the current contract status is L (Paid off), it is continued with step 4
	
- If the current contract status is K (Finished), H (Written off) or Q (Sold), it is checked if there is a path of Contract Status Transitions from status L (Paid off) to the current status, that does not contains status A (Active). If there is such a path, it is continued with step 4
	
- It is returned null and the rule ends.
	
- System finds date and time of the contract's last transition into status L (Paid off) - Contract Status Transition.Creation Date, selects contract's incoming payments with deposit date greater than or equal to transition date - Incoming Payment( Contract = contract, Status  = A (Active) ).Deposit Date  >= transition.Creation Date, and returns sum of incoming payments.Amount. If there is no incoming payment after transition into status L (Paid off), system returns 0 with default system currency - Currency( Active = true, Is Default = true ).


Output
Sum of incoming payments after pay-off with currency - Financial amount or null

## 🔗 Connections (3)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Debt full info calculations]]
- → Aggregation: [[Incoming payment calculations]]

## 📊 Appears In (1 diagrams)

- Custom: Debt full info calculations
