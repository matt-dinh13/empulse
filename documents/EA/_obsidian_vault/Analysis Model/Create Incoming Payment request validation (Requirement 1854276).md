---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854276
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Create Incoming Payment request validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

System performs set of validation of the provided request:

	
- Al least one of the following attributes is filled:
- request.accountNumber
- request.contractCode
	
- If request.contractCode is provided, then check if Contract with the same Code exists
	
- If request.accountNumber is provided, then check if account exists by accountNumber Contract.Credit Account Number = request.accountNumber
	
- Check if payment type exists in the system
	
- Deposit date is not in future (depositDate <= current date)

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
