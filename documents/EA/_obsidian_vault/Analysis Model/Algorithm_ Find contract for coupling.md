---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model"
domain: "Analysis Model"
element_id: 1225204
diagrams: 2
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Find contract for coupling

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model

## 📝 Notes

This algorithm tries to find the corresponding contract according to attributes of the given incoming payment.


	
- IF the given incoming payment has a contract number defined (INCOMING_PAYMENT.PROVIDED_CONTRACT_NUMBER), THEN:
- system tries to find the contract with CONTRACT.CODE = INCOMING_PAYMENT.PROVIDED_CONTRACT_NUMBER
- if no contract is found, then this algorithm finishes unsuccessfully else this algorithm returns the found contract
	
- ELSE return unsuccessful contract search.

## 📊 Appears In (2 diagrams)

- Use Case: Creating incoming payment
- Use Case: Pairing incoming payments from file
