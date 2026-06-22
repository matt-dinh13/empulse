---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1719844
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Validate termination (pay-off) due date

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Validation of entered Termination due date (TDD):
Optional.
TDD has to be valid date format.
If entered Pay-off Reason = DEATH then TDD <= current date
If Contract.Product.ProductType = CEL then

	
- TDD >= due date of the first standard active Installment from contract installment schedule.
	
- TDD <= due date of the next standard active Installment from contract installment schedule.

If Contract.Product.ProductType = REL then

	
- If entered Pay-off Reason <> DEATH then TDD >= current date.

An error message is used if the validation fails (MSG_0412; e. g. 'System can not find due date for pay payoff.')

## 🔗 Connections (2)

- ← Dependency: [[Termination due date]]
- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]

## 📊 Appears In (2 diagrams)

- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
