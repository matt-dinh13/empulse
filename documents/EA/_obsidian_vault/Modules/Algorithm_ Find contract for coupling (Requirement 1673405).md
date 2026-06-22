---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Business Rules"
domain: "Modules"
element_id: 1673405
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Algorithm: Find contract for coupling

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Business Rules

## 📝 Notes

This algorithm tries to find the corresponding contract according to attributes of the given incoming payment.
 

	
- IF the given incoming payment has a contract number defined (IncomingPayment.providedContractNumber), THEN:
- system tries to find the contract with Contract where Code = IncomingPayment.providedContractNumber
- if no contract is found, then this algorithm finishes unsuccessfully else this algorithm returns the found contract
	
- ELSE return unsuccessful contract search.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
