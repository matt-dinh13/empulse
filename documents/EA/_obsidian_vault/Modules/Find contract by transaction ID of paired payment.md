---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741402
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Find contract by transaction ID of paired payment

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input:
sourceTransactionId


Output:
contractCode

Steps:

	
- Search installmentPart, conected to Installment
	
- Find first record, get contractId from this record
	
- Find contract code by its id found in step 2
	
- return contractCode

## 📊 Appears In (1 diagrams)

- Use Case: OVERVIEW - Installment Schedule
