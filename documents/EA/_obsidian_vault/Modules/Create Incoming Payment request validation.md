---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673310
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Create Incoming Payment request validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules

## 📝 Notes

System performs set of validation of the provided request:

	
- Check if account exists by accountNumber --> Contract.Credit Account Number = request.accountNumber
	
- Check if payment type exists in the system
	
- Deposit date is not in future (depositDate <= current date)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.380 Create incoming payment on local request]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Creating incoming payment on internal component request
