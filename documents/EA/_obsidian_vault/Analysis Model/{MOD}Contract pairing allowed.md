---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules"
domain: "Analysis Model"
element_id: 1225205
diagrams: 6
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Contract pairing allowed

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules

## 📝 Notes

Input:

	
- Contract


Output:

	
- result (OK, WRONG_CONTRACT_STATE, NO_INSTALLMENTS)


System performs checks below. 
If all checks passed, returns result OK. 


Contract status check:
The given contract is in one of the following statuses:

	
- signed
	
- active
	
- payoff
	
- finished
	
- written-off

If fails, returns result WRONG_CONTRACT_STATE.


For CEL contract Installment schedule exists check:
If Contract.Contract Type = CEL, then for contract exists at least one active Installment.
If fails, returns result NO_INSTALLMENTS.

## 🔗 Connections (2)

- ← Dependency: [[05.030 Couple incoming payment manually]]
- ← Dependency: [[Process create incoming payment request]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Creating incoming payment
- Use Case: Manual pairing of incoming payment with contract
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing incoming payments from file
- Use Case: Process batch of incoming payment processing requests
