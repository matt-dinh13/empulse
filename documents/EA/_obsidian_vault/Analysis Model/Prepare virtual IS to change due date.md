---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules"
domain: "Analysis Model"
element_id: 1863328
diagrams: 3
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Prepare virtual IS to change due date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules

## 📝 Notes

Input:

	
- Contract
	
- Change Due Date Request
	
- Change of Due Date Service


Abbreviations:
I = Installment in installment schedule of processed contract
FP = financial parameters of processed contract
CHDD_RequiredDueDate = Change Due Date Request. Changed Due Date
DayCountMethod = Contract.Financial Parameters.ProductVariant.Product.ProductProfile.DayCountMethod

Algorithm:

	
- System evaluates CHDD_LastDueDate - due date of the previous Installment (if does not exist then contract sign date) before CHDD_RequiredDueDate
	
- System finds the maximal version of active and inactive installments by the rule Maximal Version of Installment Schedule and sets it as MV.
	
- System calculates 
- PastPrincipal as a sum of installment parts of type = 'S' where I.DueDate <= CHDD_LastDueDate
- NewPCA = FP.PCA - PastPrincipal
- PastInstallments as I.InstallmentNumber where I.DueDate = CHDD_LastDueDate and installment part type = 'S'
- NewTerm = FP.Term - PastInstallments
- If (Change of Due Date Service.Recalculate Annuity 360 = TRUE AND FP.Day Count Method = '30/360') then NewAnnuity = Change Due Date Request. New annuity; if it is not provided, the system calculates it by Annuity calculation with parameters:
--- AIR (interest rate) = FP.InterestRate
--- TERM (number of terms) = NewTerm
--- Annuity Base Amount = NewPCA
--- Installment Schedule Method = FP.InstallmentScheduleMethod
--- Day Count Method = DayCountMethod
--- StartDate = CHDD_LastDueDate
--- FirstDueDate = CHDD_RequiredDueDate
- If Change of Due Date Service.Recalculate Annuity 360 != TRUE AND FP.Day Count Method = '30/360' then NewAnnuity = FP.Annuity -- original annuity is retained
	
- If following conditions are fulfilled:
- Contract.Contract Type = 'CEL'
- Enable Shift Last Due Date = TRUE
- (Date of loan providing +1 month) - Date of loan providing > First due date - Date of loan providing
then the system calculates Shifted Last Due Date by Shifted last due date calculation algorithm with the following parameters:
- Terms = NewTerm
- contractSignDate = CHDD_LastDueDate
-parameters of Deferred payment service
--- DEFP = false
--- LengthDEFP = null
	
- System creates and updates a virtual copy of current Financial Parameters (FP) structure with new values (only temporary in memory for IS calculation):
- FP.Provided Credit Amount = NewPCA
- FP.Annuity = NewAnnuity 
- FP.Term = NewTerm
- FP.Installment Due Date = day of month from CHDD_RequiredDueDate
- FP.First Due Date = CHDD_RequiredDueDate
- FP.Loan Providing Date = CHDD_LastDueDate
- FP.Shifted Last Due Date = Shifted Last Due Date (if it was calculated; NULL otherwise)
All remaining attributes including related FP Items stay the same.
	
- System generates virtual Installment schedule for remaining principal (only temporary in memory) according to the algorithm Generate installment schedule algorithm with parameters
- INSTALLMENT.VERSION = MV + 1
- Contract
- virtual Financial Parameters
- Recalculation reason = 'DD'
- Installment number = MAX (Installment.Number from Installment where I.Installment Type = 'STANDARD' and Installment.Active = TRUE) + 1
which returns virtual Installment Schedule, i.e. Change Due Date Request->Service Offer Installments.
	
- If Change Due Date Request -> Charged Fee To Request exists, the system:
- gets LastExtraordinaryInstallmentNumber = Max (Installment Number) from the Installments having Installment Type = EXTRAORDINARY and Active Flag = 1
- generates Service Offer Installment with Fee Installment Part as follows:
--- Due Date = CHDD_RequiredDueDate
--- Customer Due Date = Service Offer Installment.Due Date – DaysBeforeDueDate (value from Global Parameter)
--- Installment Number = LastExtraordinaryInstallmentNumber + 1
--- Installment Version = MV
--- Deactivated In Version = NULL
--- Installment Type = EXTRAORDINARY
--- Recalculation Reason = DD
--- Active Flag = 1
For each Tariff Item in Charged Fee To Request, generates Service Offer Installment.Installment Part for Part Type = 'F' (Fee)
- Amount = Charged Fee To Request.Amount
- Paid Amount = 0
- Fully Paid Date = NULL
- reference to Tariff Item Type
	
- System sets back some attributes of virtual Financial Parameters (FP):
- FP.First Due Date = current FP.First due date  
- FP.Loan Providing Date = current FP.Loan Providing Date 
- FP.Terms = current FP.Terms
and makes the following update:
{DEL PAYM-2189}- FP.Expected End Date = calculates date of expected end of the loan by Calculation of ExpectedEndDate rule{/DEL}
- FP.TotalMonthlyInstallment = sum of all installment Parts of the first standard Installment of Service Offer Installment
All remaining attributes including related FP Items stay the same.
	
- System temporarily adds all Contract->Installments[where Active = true AND and Due date < CHDD_RequiredDueDate] to the list of Service Offer Installment
	
- System sets virtual Financial Parameters.Total Payment Per Credit = sum of Installment Part.Amount fromService Offer Installment having Installment Type = 'STANDARD' and Installment.Active = TRUE
	
- System calculates and saves virtual presented interest rates according to the rule Calculate Presented Interest Rate for Loan Service Request, passed is
- virtual Financial Parameters
- Change Due Date Request
	
- System removes temporarily added Installments[i.e. where Due date < CHDD_RequiredDueDate] from the list of Service Offer Installment


Output:

	
- Change Due Date Request with generated Service Offer Installments, i.e. with a list of installments AFTER changed due date


	
- virtual Financial Parameters
	
- CHDD_LastDueDate
	
- NewVersionIS = MV + 1

## 🔗 Connections (7)

- ← Dependency: [[08.063 Process request for change due date (UseCase 1862206)]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[Calculation of ExpectedEndDate]]
- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[Calculate Presented Interest Rate for Loan Service Request]]
- → Dependency: [[{DEL}Shifted last due date calculation]]
- ← Dependency: [[Prepare change due date simulation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: CHDDR processing
- Use Case: CHDDR request creation - via GUI
