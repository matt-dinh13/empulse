---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-209 (CBL-399) Adding info about active FER/CET request"
domain: "Requirements Model"
element_id: 1623417
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Calculate debt on interest to the passed date (from installment schedule)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-209 (CBL-399) Adding info about active FER/CET request

## 📝 Notes

This algorithm calculates debt on accrued interest to the passed calculation date. Debt on accrued interest is counted from all unpaid installment parts on interest till the calculation date and from a proportionate part of the first following installment parts (on interest) in case the calculation date in not the same date as a maximal due date of unpaid installments till the calculation date. 
Note: An example with a calculation is attached in the linked document.

Input:

	
- calculationDate
	
- Contract
	
- ignorePrepayments - default value false


Constraints:

	
- calculationDate >= current date


Output:

	
- debtOnAccruedInterest     ...FinancialAmount


Algorithm:

	
- System sets debtOnAccruedInterest = 0.
	
- System finds all Contact->Installment[active = true AND dueDate =< calculationDate]->InstallmentPart[where partType is in (I, IT)]. 
If at least one record is found the system sets:
- For all InstallmentParts where Installment.dueDate =< current date: debtOnAccruedInterest = debtOnAccruedInterest + sum (InstallmentPart.amount - InstallmentPart.amountPaid)

        For all InstallmentParts where Installment.dueDate > current date: if ignorePrepayments = false then debtOnAccruedInterest = debtOnAccruedInterest  + sum (InstallmentPart.amount - InstallmentPart.amountPaid) else debtOnAccruedInterest = debtOnAccruedInterest + sum (InstallmentPart.amount)
        - startAccruedPeriodDate = maximal Installment.dueDate
        else
        (it occurs if the calculation date is between the first due date and contract signature date)
        - startAccruedPeriodDate = Contract->ContractStatusTransation.creationDate[where Status = Signed and it is the first status transition to         Signed] (i.e. date of contract signature). If startAccruedPeriodDate is not found, the algorithm returns debtOnAccruedInterest and ends.

	
- If startAccruedPeriodDate = calculationDate , the algorithm returns debtOnAccruedInterest and ends. 
(i.e. no accrued interest is necessary to calculate)
Else the system continues with the next step.
	
- System finds Installment[firstFollowing] with minimal Installment.dueDate from 
Contact->Installment[active = true AND dueDate > calculationDate]
(i.e. the first following Installment after calculationDate according to the dueDate).
and selects all Installment[firstFollowing]->InstallmentPart[where partType is in (I, IT)].
If no record is found, the algorithm returns debtOnAccruedInterest and ends. 
(it occurs if the calculationDate is after the end of contract)
	
- System calculates: 
- numPeriodDays = count of days between Installment[from the step 3].dueDate and Installment[firstFollowing].dueDate
- accIntNumDays = count of days between  Installment[from the step 3].dueDate and calculationDate 
- accIntAmountToPaid = sum (InstallmentPart.amount * {accIntNumDays / numPeriodDays} )
- if ignorePrepayments = false then accIntAmountAlreadyPaid = sum(InstallmentPart.amountPaid) else accIntAmountAlreadyPaid = 0
- accIntAmountUnpaid = (accIntAmountToPaid - accIntAmountAlreadyPaid) 
- if accIntAmountUnpaid > 0, then debtOnAccruedInterest = debtOnAccruedInterest + accIntAmountUnpaid
	
- System rounds debtOnAccruedInterest according to the rule Rounding (method = MATH, scale = 0.01). ...java.math.RoundingMode.HALF_UP
	
- Algorithm returns debtOnAccruedInterest and ends.

## 🔗 Connections (1)

- → Dependency: [[REQ#1 Calculate debt on an external request]]

## 📊 Appears In (3 diagrams)

- Custom: IS-209 (CBL-399) Adding info about active FER/CET request
- Use Case: Calculate debt on external request
- Use Case: OVERVIEW - Installment Schedule
