---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1850962
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Rollback Service Automatically

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule describes process of automatic rollback after payment cancellation or decoupling.

Input:
- contract code
- service type
- canceled payment

VN, ID, IN
Steps:

	
- System checks service type of the last service timeline records:
- if recalculation reason = ER, EM, EG or CO,  use case 03.301 Rollback service is called.
- else use case ends.


PH only 
Steps:

	
- System checks service type of the last service timeline records:
- if recalculation reason = ER, EM, EG or CO, {DEL PAYM-5852} use case 03.301 Rollback service is called {/DEL} {ADD PAYM-5852} continue with next step. {/ADD}
- else use case ends.
	
- {ADD PAYM-5852} System finds overpayment amount as sum of installmentPart.Amount for all active installments and its parts where installmentPart.Type = O (overpayment)
- if no active part type overpayment is found, set overpayment  = 0
	
- System compares overpayment amount and canceled payment amount:
- if overpayment amount >= canceled payment amount, use case ends.
- else if overpayment amount < canceled payment amount, than use case 03.301 Rollback service is called for the contract and recalculation reason.
{/ADD}
