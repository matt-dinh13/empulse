---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline"
domain: "Modules"
element_id: 1623496
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Checking of correct installment payments 

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline

## 📝 Notes

Description:
Rule is intended for checking if installment payments on particular contract are in correct amount and date with respect to defined tolerance. 

Input parameters:
- link to Payment Discipline Parameters
- contract 
- start date of checked period
- final date of checked period
- last due date (mandatory only for DifferToleranceForLastDPD = true)


Output parameters:
- discipline is OK (TRUE/FALSE) 
- reason of fail

Procedure:
0. Read parameters 

	
- DPDDelayTolerance, 
	
- DPDAmountTolerance 
	
- DifferToleranceForLastDPD
	
- LastDPDDelayTolerance, 
	
- LastDPDAmountTolerance 

from Payment Discipline Parameters (defined by link).

-- checking discipline in Debt catalogue (optimization).
If the debt registered in debt catalogue is lower than DPDAmountTolerance for period <start date of checked period, final date of checked period + 1> then 

	
- If DifferToleranceForLast DPD = false then return TRUE.
	
- If the debt registered in debt catalogue is lower than LastDPDAmountTolerance for period <last due date, final date of checked period + 1> then return TRUE.


-- checking of individual installments
For each active installment (I) of contract where I.dueDate in interval (start date of checked period, final date of checked period) (inclusive) do following steps:

If DifferToleranceForLastDPD = true and I.dueDate = last due date from input 
then 
-- ToleranceAmount = LastDPDAmountTolerance 
-- ToleranceDelay = LastDPDDelayTolerance 
else 
-- ToleranceAmount = DPDAmountTolerance 
-- ToleranceDelay = DPDDelayTolerance 

Calculate 

	
- relevant date of installment = due date of installment + ToleranceDelay
	
- paid amount of installment on relevant date as sum of parts of incoming payments with deposit date <= relevant date, which are paired with installments with due date <= relevant date
	
- installment sum of installment on relevant date as sum of installment part amounts of installments with due date <= relevant date
	
- difference = installment sum - paid amount


If difference is higher than ToleranceAmount then 

	
- return (FALSE, MSG_PAYMENT_DISCIPLINE_INSTALLMENT_NOT_PAID_CORRECTLY ${contract code} ${due date} ${relevant date} ${difference})

else

	
- return TRUE.

## 🔗 Connections (3)

- → Dependency: [[Payment Discipline Parameters]]
- ← Dependency: [[Checking of payment discipline]]
- ← Dependency: [[{MOD}08.601 Process CEL Reward]]

## 📊 Appears In (3 diagrams)

- Custom: Payment discipline
- Use Case: CEL Rewards 
- Use Case: Fees-back service evaluation and processing
