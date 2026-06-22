---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878910
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Interest rate recalculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

Input:
* Provided credit amount
* Start date
* End date
* Annuity
* Day count method
* Terms
* Interest rate
* IncludeDeferredInterest - setting of deferred interest

Output:
* IRR - recalculated interest rate

Steps:
1. If IncludeDeferredInterest is in ('NO', 'IN_FIRST_INST') then system sets Start date = (End date - 1 month).
2. System sets Start date = Start date + 1 day.
3. System creates Fictitious cash flow as an array of following values:
[0] = Provided credit amount * {DEL PAYM-1787}12 * (decimal part of result of Interest factor ACT called with parameters Day count method, Start date, End date, 1){/DEL} {ADD PAYM-1787}result of Day count ratio calculation called with parameters Day count method, Start date, End date){/ADD}
[1] = Provided Credit Amount - [0] - Annuity
[2..N] = Annuity * (-1) //N = number of Terms from input, so the number of entries for this line is Terms-1 and total number of entries is Terms+1
4. MonthlyIRR is calculated by Internal Rate of Return calculation algorithm on basis of values defined in Fictitious cash flow and original Interest rate from input.
5. System returns IRR = (MonthlyIRR * 12) on output.

## 🔗 Connections (3)

- → Dependency: [[ISGEN - Internal rate of return calculation]]
- → Dependency: [[ISGEN - Day count ration calcullation]]
- ← Dependency: [[ISGEN - Generate installment schedule - Equal annuity]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
