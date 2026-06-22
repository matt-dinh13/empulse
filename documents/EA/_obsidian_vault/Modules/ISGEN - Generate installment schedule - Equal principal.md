---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878914
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Generate installment schedule - Equal principal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

The described IS algorithm is standard of ACT/365 (i.e. exact count of days is used for interest accrued calculation) with fix amount of principal per each installment.
If the deferred installments service is used, additional interest per period when the client does not repay is added to the first installment.
FP.Shifted Last Due Date value is not taken into account so the last installment due date is not shifted.

Inputs

	
- Contract


	
- Financial Parameters (FP) - structure of financial parameters of contract (including fees) which is taken before contract signature from Offer Financial Parameters, or from Financial Parameters after contract signature


	
- Recalculation reason
	
- {ADD IS-1844} Service Parameters (optional) {/ADD}

Outputs

	
- Installment Schedule - structure of Installments (INSTALLMENT) and corresponding Installment Parts (INSTALLMENT_PART) (not persistent)


Definitions and calculated values

	
- FP.TarifItem - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes (monthly fees)
	
- {ADD CBL-12130  IS-1206} FP.TarifItemInFirstInstallment - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In First Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes

         (Claculated by rule In first installment fees amount definition , charged to installment with due date specified in Get installment for Origination Fee{/ADD}

	
- FDD - FP.FirstDueDate
	
- DLP - Date of the Loan Providing = FP.Loan Providing Date


	
- DaysBeforeDueDate - global parameter for client's due date of an installment


	
- For rounding of calculated amounts is roundingScale and roundingMethod parameters taken
	
- For the annuity rounding is annuityRoundingScale from Global Parameters taken


	
- lastAnnuityRoundingMethod parameter is used in case when is needed to round the last installment other way then other installments


	
- I - Installment entity
	
- IP - Installment Part entity
	
- Principal_Balance (Receivable on principal to the previous date) - before start of algorithm is pre filled with FP.Provided Credit Amount
	
- start_date - beginning of the interest period; for the first period it is DLP; for the every next period it is end_date of the previous period.
	
- end_date - end of interest period; for the first period it is FDD; for the second and next period it is FDD = FDD + 1 month
	
- i - number of installment from 1 to FP.Term


Steps:
1.  {ADD CBL-11196} If date(start_date) = current_date and IS algorithm in ISalgorithmSupportingFirstPeriodDefaultLength then system calls Compute first period default length (FDD) to update the first period start date.{/ADD CBL-11196} 
2.  System creates set of Installments in count of FP.Terms value with attributes:

	
- I.Due Date = FDD for the first installment; for each next term incremented by one month


	
- I.Contract = reference to Contract
	
- I.Customer Due Date = I.Due Date – DaysBeforeDueDate. {ADD BRPH-50 IS-2337} If I.Due Date – DaysBeforeDueDate < Contract.Sign Date, then I.Customer Due Date = Contract.Sign Date {/ADD}
	
- I.Installment Number = 1 for the first installment; for each next term incremented by one
	
- I.Version = 1
	
- I.Installment Type = 'STANDARD'
	
- I.Active = 'TRUE'
	
- I.Recalculation Reason  = Recalculation reason from input


2. Initial setting of items for interest and principal calculation is performed as follow:

	
- i = 1 (start position for the first installment)
	
- Principal_Balance = FP.Provided Credit Amount


	
- Fix_Principal = (FP.Provided Credit Amount / FP.Term; [roundingScale], [roundingMethod])


	
- end_date = FP.FirstDueDate
	
- DayCountMethod = FP.DayCountMethod


3. Calculate additional deferred interest by algorithm Deferred Interest calculation with parameters:
- DLP
- FP.FirstDueDate
- DayCountMethod
- FP.CreditAmount
- FP.InterestRate
which returns DeferredInterest, EndOfDeferredPeriod
start_date = EndOfDeferredPeriod

{ADD CBL-12130  IS-1206} 
4. If FP.generateOriginationFeeItems = TRUE, IP.Amount for I.PartType = 'F' is obtained as Fee = FP.TarifItemInFirstInstallment for first installment
{/ADD}

5.  For each created Installment except the last one, system calculates its fee, principal and interest, and creates corresponding Installment Part as follow:

	
- IP.Amount for I.Part Type = 'F' (Fee) is obtained as:
Fee = FP.Tariff Item.Item Amount
For each monthly fee from FP.Tariff Item from the input one Installment Part record is created.


	
- IP.Amount for I.Part Type = 'S' (Principal) is calculated as:
If i = FP.Term (i.e. the last installment) then Principal[i] = Principal_Balance
Else Principal[i] = Fix_Principal

IP.Amount for I.Part Type = 'I' (Interest) is calculated as:
{ADD BRPH-50 IS-2337} If start_date = end_date (special case for first installment where FirstDueDate = DLP), then set Interest[i] = 0. Else {/ADD}
Interest[i] = Principal_Balance * (Interest Coefficient (by Interest factor ACT with parameters: DayCountMethod, SIP = start_date, EIP = end_date, AIR = FP.Interest Rate)); [roundingScale], [roundingMethod]) - Principal_Balance
If i = 1 then Interest[i] = Interest per IP[i] + DeferredInterest (i.e. adding deferred interest into the first installment)
{ADD CBL-4409} if feature switch StopRoundingEqPrincZeroInterestRate = false OR Interest[i] > 0 then {/ADD} {
-- If i = FP.Term (i.e. the last installment) then Interest[i] = (Interest[i] + Principal[i]; [annuityRoundingScale], [lastAnnuityRoundingMethod]) - Principal[i] --do final rounding so that the last annuity is rounded by other method (e.g. ROUNDUP)
-- Else Interest[i] = (Interest[i] + Principal[i]; [annuityRoundingScale], [roundingMethod]) - Principal[i] --do final rounding so that the annuity is rounded respectively
{ADD CBL-4409} endif {/ADD}
{ADD BRPH-50 IS-2337} If Interest[i] = 0, then installment part 'I' is not created. {/ADD}

	
- IP.Amount Paid = 0
	
- IP.Part Type = 'F' or 'S' or 'I' by created type.


	
- IP.Tariff Item = for every charged IP.Part Type = 'F' (Fee) is stored reference to particular Tariff.Tariff Item from FP.Tariff Item


	
- System updates items for calculation next Installment Part:
Principal_Balance  = Principal_Balance - Principal[i]
i = i + 1 (next installment number)
If i > FP.Term (the last installment), it is continued with the step #5 (i.e. end of installment parts generation)
start_date = due date of Installment Number i - 1
end_date = due date of Installment Number i


6.  {ADD IS-1844} If Service Parameters.Apply To Up = true and Service Parameters.Overlap Period > 0, system creates x standard installments with part type principal and amount = 0 (x = Service Parameters.Overlap Period). Due date of the first zero installment = FP.first due date - x months, due dates of next zero installments are after one month.  Else continue with step 10.
System increase number for all non-zero installments by Service Parameters.Overlap Period.{/ADD}
7. System returns list of installments and their installment parts

## 🔗 Connections (3)

- → Dependency: [[ISGEN - Deferred interest calculation]]
- → Generalization: [[ISGEN - Generate installment schedule algorithm]]
- → Dependency: [[ISGEN - Interest factor ACT]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
