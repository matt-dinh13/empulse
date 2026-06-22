---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1303997
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ISG: Generate installment schedule algorithm

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model

## 📝 Notes

Input parameters:

	
- Contract - code of the contract


	
- Financial Parameters - structure of financial parameters of offer/contract (including fees)
	
- Recalculation reason
	
- Installment version
	
- Installment Number (optional) - is needed?


Output:

	
- Installment Schedule - structure of Installments and corresponding Installment Parts (not persistent)
	
- IS Interest Rate (optional) - why optional? what is it used for?


FP = Financial Parameters
AIR = annual interest rate = Financial Parameters.InterestRate
LPD = loan providing date = FP.LoanProvidingDate
FDD = first due date = FP.FirstDueDate
EMI = equated monthly installment = FP.Annuity

Steps:
1. System gets Installment Schedule Method = Financial Parameters->InstallmentScheduleMethod. If Installment Schedule Method = null then system gets the method from Contract->FinancialParameters->ProductVariant->Product->ProductProfile->Product Profile Installment Schedule[where IsDefault = TRUE].InstallmentScheduleMethod. System persists obtained Installment Schedule Method into Financial Parameters.InstalmentScheduleMethod. - why would it be null?
2. If Installment Schedule Method is in (BASIC, EXTENDED1) then system calculates real monthly interest rate using IRR and set AIR = IRR*12.
3. If global parameter deductInterestOvercharge = true then system calculates interest overcharge and sets LPD = FDD - 1 month.
4. If includeDeferredInterest = false then system sets LPD = FDD - 1 month else system calculates deferred interest.
5. System generates Installment Schedule (steps described in Generating IS below).

if equalPrincipal = true then principal part for each installment = PCA/Terms
if includeDeferredInterest = true AND deferred interest > 0
if includeDeferredInterestInEMI = true
add deferred interest to interest part of the first installment before calculation of principal part
else
add deferred interest to interest part of the first installment after calculation of principal part
last istallment may be calculated differently for some methods?
shiftedLastDueDate?
annuityRoundingMethod, Scale
lastAnnuityRoundingMethod, Scale
If deductInterestOvercharge = true
deduct interest overcharge
Stop using deducting of interest overcharge, use ON_DISBURSEMENT (interest calculation (and IS generation) from disbursement date) instead

Generating IS:
1.  System creates set of Installments in count of FP.Terms value with attributes:

	
- Due Date = FDD for the first installment; for each next term incremented by one month - move down


	
- Contract = Contract.ID
	
- Customer Due Date = Due Date – DaysBeforeDueDate (global parameter)
	
- Installment Number = from 1 to FP.Terms
	
- Version = Installment version
	
- Installment Type = 'STANDARD'
	
- Active = 1
	
- Recalculation Reason = Recalculation reason

2. System sets:

	
- i = 1
	
- Remaining principal = FP.ProvidedCreditAmount
	
- End date = FDD
	
- Day count method = FP.DayCountMethod

3. Calculate additional deferred interest by algorithm Deferred Interest calculation (move up?) with parameters:

	
- LPD
	
- FDD
	
- Day count method
	
- Remaining principal
	
- AIR - or some other IR?

which returns

	
- Deferred interest
	
- End of deferred period

4. System sets variable Start date = End of deferred period
5. System creates a fee installment part of ith installment for every FP->TariffItem with following values:

	
- Amount = FP.Tariff Item.Item Amount
	
- Part Type = 'F'
	
- Amount Paid = 0
	
- Tariff Item Type Code = FP->TariffItem.TariffItemTypeCode

6. System calculates Interest coefficient using Interest factor ACT (add support for 30/360 interest factor calculation) with parameters:

	
- Day count method
	
- Start date
	
- End date
	
- AIR

7. System creates an interest installment part of ith installment with following values:

	
- Amount = Remaining principal * (Interest coefficient - 1) rounded by roundingScale and roundingMethod
	
- Part Type = 'I'
	
- Amount Paid = 0

8. System creates a principal installment part of ith installment with following values:

	
- Amount = if i = FP.Term (i.e. the last installment) then Remaining principal else EMI - Amount from step 7 (interest)
	
- Part Type = 'S'
	
- Amount Paid = 0

9. If i = FP.Term (i.e. the last installment) then system updates the interest installment part of ith as follows:

	
- Amount = Amount + (LastEMI - Principal[i] - Interest[i]) where LastEMI = Principal[i] + Interest[i] rounded by annuityRoundingScale and lastAnnuityRoundingMethod -- compensation of rounding difference which is added to the last interest amount
else 
- Principal[i] = EMI - Interest[i]
- If i = 1 then Interest[i] = Interest per IP[i] + DeferredInterest --adding deferred interest into the first installment; keep in mind in this case, the resulting amount can be higher than EMI 
end

10. System updates:

	
- Remaining principal = Remaining principal - Amount from step 8 (principal).


	
- i = i + 1
	
- Start date = due date of Installment Number i - 1
	
- End date = due date of Installment Number i

11. System continues with step 5.

///////
2. According the Installment Schedule Method, it is continued with calling a specific algorithm:
- IS_ALG_BASIC type - Generate installment schedule - Basic algorithm
- IS_ALG_EXTEND1 type - Generate installment schedule - Extended1 algorithm
- IS_ALG_EQ_PRINC type - Generate installment schedule - Equal principal
- IS_ALG_AN_PRINC type - Generate installment schedule - Annuity principal
with parameters from input:

3. It returns

	
- Installments Schedule
	
- optionally IS Interest Rate

## 🔗 Connections (4)

- → Dependency: [[ISG_ Internal Rate of Return calculation]]
- → Dependency: [[ISG_ Interest overcharge deduction algorithm]]
- → Dependency: [[ISG_ Interest factor calculation]]
- ← Dependency: [[ISG01 Generate installment schedule]]

## 📊 Appears In (1 diagrams)

- Use Case: ISG - Generate installment schedule
