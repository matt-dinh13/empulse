---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877458
diagrams: 3
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Create small uderpayment request

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

{ADD CLM-4771}
 

	
- If total unpaid amount <= 0 or > SmallUnderpaymentAmount, use case ends.
	
- If exists Debt Catalogue Request where status in (W, R), use case ends.
	
- If exists Incoming Payment Request with payment type = SU and status in (W, R), use case ends.
	
- System creates Incoming Payment Request with
- payment type = SU
- deposit date = current date
- operation type = CREATE_SP (create special payment) 
- amount = total unpaid amount
	
- Use case ends.

## 📊 Appears In (3 diagrams)

- Custom: Debt full info calculations
- Use Case: Contract finishing automatically
- Use Case: Contract finishing manually
