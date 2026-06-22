---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Business Rules"
domain: "Modules"
element_id: 1673404
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Special incoming payments

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Business Rules

## 📝 Notes

Special incoming payments are payment types automatically generated as incoming payment in some special cases (e.g. correcting a small debt on the contract) to finalize contract installment schedule.
In some cases if a client's payment is paired with the contract, or a client's payment is canceled, the special payment has to be also cancelled.
Following special payment are set to be cancelled on change in client's payments paired with the contract:

	
- Small underpayment (SU)

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
