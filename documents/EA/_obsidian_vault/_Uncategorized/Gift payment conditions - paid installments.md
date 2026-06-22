---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1558632
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Gift payment conditions - paid installments

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

Description:
Rule is intended for evaluation of additional conditions for granting of Gift payment on selected contract checking the installments full repayment explicitly

Input parameters:
- Contract
{ADD CBL-11131}Date of gift payment{/ADD CBL-11131}

Output parameters:
- result of checking (TRUE/FALSE)

Procedure:
 

	
- {MOD CBL-11131}
System computes the amount to be paid as a condition for GP providing (GPtoBePaid) as sum of unpaid amount (amount - paid mount) of all Installment Part Types and its Tariff Item Types to be involved in evaluation of Gift payment by Recalculation Reason type (GP_reason)  - see rules in ALG_Get involved Installment part . If no Installment Part is returned, return True.
	
- System sums the paid amount of installments to be covered by Gift payment (GPprepaid):
- system sums paid amount for contract´s standard active installments having Due Date > Date of gift payment
	
- If GPtoBePaid (if allowed on service level) > GPprepaid:
- System returns False
otherwise returns True
{/MOD CBL-11131}


Note: case when the installments included in GP operation are already paid is also covered:
-> sum of unpaid amount GPtoBePaid minus SmallUnderpayment: 0 > x -> return False otherwise True
