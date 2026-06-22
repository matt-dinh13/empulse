---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878749
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Generate installment schedule - Equal Annuity algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

{ADD PAYM-1787 CBL-4815 /}

The described algorithm is an universal algorithm (for all day count methods) for installment schedule where annuity is the same for all installments (even though exceptionally the first and the last installment can differ due to some compensations). It doesn't cover installment schedules where principal is the same for all installments and interest is variable which leads to different amounts of installments (this is covered in Generate installment schedule - Equal principal).

Inputs:
* Contract
* Financial Parameters - structure of financial parameters of Contract (including fees)
* Recalculation reason
* Installment Plan Scheme (optional)
* Financing Scheme Variant (optional)
* {ADD IS-1844} Service Parameters (optional){/ADD}

Outputs:
* Installment Schedule - structure of installments and its parts (non-persistent)

Initialization:
IncludeDeferredInterest = if Installment Plan Scheme is provided then Installment Plan Scheme.Include Deferred Interest else 'NO'
DayCountMethod = if Installment Plan Scheme is provided then Installment Plan Scheme.Day Count Method else Financial Parameters.Day Count Method
InterestRoundingScale = if Installment Plan Scheme is provided then Installment Plan Scheme.Interest Rounding Scale else value of system property scheduleRounding
InterestRoundingMethod = if Installment Plan Scheme is provided then Installment Plan Scheme.Interest Rounding Method else value of system property scheduleRoundingMode
RoundingScale = if Installment Plan Scheme is provided then Installment Plan Scheme.Annuity Rounding Scale else value of global parameter annuityRounding
LastAnnuityRoundingMode = value of system property lastAnnuityRoundingMode
KeepEqualLastInstallmentAmount = if Installment Plan Scheme is provided then Installment Plan Scheme.Keep Equal Last Installment Amount else TRUE
RecalculateInterestRate = if Installment Plan Scheme is provided then Installment Plan Scheme.Recalculate Interest Rate else TRUE
LoanProvidingDate = Financial Parameters.Loan Providing Date
InterestRate = if Financing Scheme Variant is provided and Financing Scheme Variant.Type = 'AIR' then Financing Scheme Variant.AIR else Financial Parameters.Interest Rate
{ADD CBL-12130  IS-1206} FP.TarifItemInFirstInstallment - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In First Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes
(Claculated by rule In first installment fees amount definition , charged to installment with due date specified in Get installment for Origination Fee{/ADD}
{ADD CBL-12984 IS-1273} InstallmentPlanScheme - if Installment Plan Schenme is not on input, get default Installment Plan Scheme settings by rule Get default installment plan. {/ADD}

Steps:
1. System gets Financial Parameters.First Due Date as FirstDueDate.
2. System creates set of installments with installment numbers from 1 to value of Financial Parameters.Terms with following attributes:
- Contract = Contract from input
- Due Date = FirstDueDate for the first installment; for each next term incremented by one month
- Customer Due Date = Due Date - value of global parameter DaysBeforeDueDate. {ADD BRPH-50 IS-2337} If I.Due Date – DaysBeforeDueDate < Contract.Sign Date, then I.Customer Due Date = Contract.Sign Date {/ADD}
- Version = 1
- Installment Type = 'STANDARD'
- Active = 'TRUE'
- Recalculation Reason  = Recalculation reason from input
3. If RecalculateInterestRate = true and InterestRate > 0 then system recalculates InterestRate by using Interest rate recalculation with parameters Financial Parameters.Provided Credit Amount, LoanProvidingDate, FirstDueDate, Financial Parameters.Annuity, DayCountMethod, Financial Parameters.Terms, InterestRate and IncludeDeferredInterest.
4. If IncludeDeferredInterest = false then system sets LoanProvidingDate = (FirstDueDate - 1 month) else system calculates DeferredInterestAmount by the rule Deferred Interest calculation with following parameters:
- LoanProvidingDate
- FirstDueDate
- DayCountMethod
- Financial Parameters.Credit Amount
- InterestRate
which returns DeferredInterest and EndOfDeferredPeriod.
5. System sets StartDate = EndOfDeferredPeriod (if it exists) or LoanProvidingDate and system sets EndDate = FirstDueDate.
6. {ADD CBL-11196} If date(start_date) = current_date and IS algorithm in ISalgorithmSupportingFirstPeriodDefaultLength then system calls Compute first period default length (FDD) to update the first period start date.{/ADD CBL-11196}
7. System sets RemainingPrincipal = Financial Parameters.Provided Credit Amount.
8. System gets FeeItems as a list of all Financial Parameters->Financial Parameters Item->Financial Parameters Item 2 Tariff Item->Tariff Item.
{ADD CBL-12130  IS-1206} 
9. If FP.generateOriginationFeeItems = TRUE, IP.Amount for I.PartType = 'F' is obtained as Fee = FP.TarifItemInFirstInstallment for first installment
{/ADD}
10. For each installment and each fee in FeeItems system creates its fee installment part with following values:
- Part Type = 'F'
- Amount = FeeItems[i].Amount
- Amount Paid = 0
- Tariff Item = FeeItems[i].Tariff Item Type Code
11. For each installment system creates its interest and principal installment parts (simultaneously) with following values:
- Interest:
-- Part Type = 'I'
-- Amount Paid = 0
--  {ADD BRPH-50 IS-2337} If start_date = end_date (special case for first installment where FirstDueDate = LoanProvidingDate), then set Amount = 0. Else {/ADD}
Amount =  RemainingPrincipal * (decimal part of the result of Interest factor ACT called with parameters DayCountMethod, StartDate, EndDate, InterestRate) 
--- if IncludeDeferredInterest = 'IN_ANNUITY' and this is the first installment and DeferredInterest > 0 then system adds it to Amount (adding deferred interest into the interest part before calculating the principal part; in this case the resulting installment amount = EMI) 
--- system rounds the amount by InterestRoundingScale and InterestRoundingMethod
--- if the interest amount >= Financial Parameters.Annuity then system throws custom exception FirstInstallmentInterestTooHigh and use case ends.
--- {ADD BRPH-50 IS-2337} If interest amount = 0, then installment part type 'I' is not created for the installment. {/ADD}
- Principal:
-- Part Type = 'S'
-- Amount Paid = 0
-- Amount = Financial Parameters.Annuity - amount of interest installment part from above
--- if this is the last installment and KeepEqualLastInstallmentAmount = false then system sets Amount = RemainingPrincipal
--- if IncludeDeferredInterest = 'IN_FIRST_INST' and this is the first installment and DeferredInterest > 0 then system adds it to the amount of interest installment part from above (adding deferred interest into the first installment; keep in mind that in this case the resulting amount will be higher than EMI)
--- if this is the last installment and EqualPrincipal = false then system sets the amount of interest installment part = ((principal part + interest part) rounded by RoundingScale and LastAnnuityRoundingMode) - principal part (compensation of rounding difference which is added to the last interest amount)
--- system sets RemainingPrincipal = RemainingPrincipal - Amount
--- system sets StartDate = EndDate
--- system sets EndDate = due date of this installment
12.  {ADD IS-1844} If Installment version = 1 and Service Parameters.Service type = TOP UP and Service Parameters.Overlap Period > 0, system creates x standard installments with part type principal and amount = 0 (x = Service Parameters.Overlap Period). Due date of the first zero installment = FP.first due date - x months, due dates of next zero installments are after one month.  Else continue with step 14.
13. System increase number for all non-zero installments by Service Parameters.Overlap Period.{/ADD}
14. System returns a list of all installments and its installment parts as Installment Schedule.

## 🔗 Connections (4)

- → Dependency: [[Interest factor ACT]]
- → Dependency: [[Deferred Interest calculation]]
- → Generalization: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[{ADD}Interest rate recalculation]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate installment schedule
