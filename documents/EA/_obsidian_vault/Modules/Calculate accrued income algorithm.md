---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1723831
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculate accrued income algorithm

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

This function is determined to calculation of accrued income amounts for each overdue installment part of processed contract. Accrued incomes are intended to using in accounting. As installment part considered to calculation is taken only yield part (interest, fees, penalties).The first calculation is performed at the moment of contract termination. Next, recalculation is done at credit balance change (payment receiving/unpairing/pairing, removing of an installment of the contract).

Input parameters:
Contract (processed contract)

Output parameters:
Result

Notice: Abbreviations I = Installment; IP = Installment Part
Steps:
1.   System takes into Result.Interest all overdue interests of the contract installment schedule as follow:
     - Result.Interest.Amount = (IP.Amount - IP.Amount Paid) where 

	
- 
	
- <li style="list-style-type: none;">




	
- 
	
- 




	
- 
	
- IP.Part Type = 'I', 
	
- I.Due Date <= Termination Due Date, 
	
- I.Active = TRUE and 
	
- IP.Amount Paid = Amount paid by payments with Deposite Date <= Date of contract termination (i.e. date of contract status transition to status ‘L’)




	
- 
	
- 




2.  System takes into Result.Fee all overdue fees of the contract installment schedule (if any) as follow:
    - Result.Fee.Amount = (IP.Amount - IP.Amount Paid) where 

	
- 
	
- <li style="list-style-type: none;">




	
- 
	
- 




	
- 
	
- IP.Part Type = 'F', 
	
- I.Due Date <= Termination Due Date, 
	
- I.Active = TRUE and
	
- IP.Amount Paid = Amount paid by payments with Deposite Date <= Date of contract termination (i.e. date of contract status transition to status ‘L’)




	
- 
	
- 




3.   System takes into Result.Penalty all overdue penalties of the contract installment schedule (if any) as follow:
      - Result.Penalty.Amount = (IP.Amount - IP.Amount Paid) where 

	
- 
	
- <li style="list-style-type: none;">




	
- 
	
- 




	
- 
	
- IP.Part Type = 'P', 
	
- I.Due Date <= Termination Due Date, 
	
- I.Active = TRUE and
	
- IP.Amount Paid = Amount paid by payments with Deposite Date <= Date of contract termination (i.e. date of contract status transition to status ‘L’)




	
- 
	
- 




4.   Function returns Result to calling UC

## 🔗 Connections (1)

- ← Dependency: [[03.140 Recalculate accrued income (UseCase 1838774)]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
