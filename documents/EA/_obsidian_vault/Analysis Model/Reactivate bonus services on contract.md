---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833415
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Reactivate bonus services on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes reactivation all bonus services adjusted on a contract which have been terminated for defined reason.
Input:

	
- Contract
	
- TerminationReason
	
- RectivationReason


Steps:

	
- System gets all terminated bonus services adjusted on the Contract (i.e. Contract Service having Service -> Service Type.Service Type Flag = BONUS_SERVICE and Contract Service.Status = TERMINATED and Contract Service.Status Reason = TerminationReason and  Contract = Contract)
	
- For each the Contract Service found  (CS), system updates the CS record as follow:
- CS.Status = ACTIVE
- CS.Status Reason = RectivationReason
- CS.End Date = NULL.

## 🔗 Connections (1)

- ← Dependency: [[01.360 Cancel contract (UseCase 1850507)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Cancel contract
- Use Case: Cancel contract on external request
