---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1789224
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Adjusted credit amount - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

Input parameters:

	
- MinimalCreditLimit and MaximalCreditLimit are evaluated according to rule Interval of credit limit for adjustment.
	
- AdjustedLimit - limit adjusted by user


Validation:

	
- MinimalCreditLimit < AdjustedLimit < MaximalCreditLimit (MSG_InvalidAdjustedLimit)

## 🔗 Connections (2)

- ← Dependency: [[Adjusted credit limit]]
- ← Dependency: [[01.156 Adjust credit limit (UseCase 1827721)]]
