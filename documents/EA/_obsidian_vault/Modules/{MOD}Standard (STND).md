---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms"
domain: "Modules"
element_id: 1877730
diagrams: 5
connections: 15
tags:
  - requirement
  - modules
---

# 📋 {MOD}Standard (STND)

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms

## 📝 Notes

This algorithm can be used only for products where ProductType = CEL or ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true.

Outputs:

	
- Annuity
	
- DownPayment


	
- CashPaymentTotal


	
- MonthlyPayment
	
- All related fees


Algorithm:
 

	
- System checks the preferred term against setting of the current variant (i.e. ProductVariant->ClosedEndLoanProductVariant.Terms[current]):
- if the maximal term was specified on input: variant's term <= PreferredTerm
- if the minimal term was specified on input: variant's term >= PreferredTerm
If the check fails, system returns the variant as invalid and this algorithm ends.
	
- System calculates Down payment according to rule Down payment definition.
If the value is lower than zero and maximal PreferredCashPayment was specified on the input, the variant is returned as invalid.
PreferredCashPayment is either minimal (if defined) or otherwise maximal. If the value cannot be calculated because a needed percentage-based-on amount or limit-based-on amount cannot be calculated yet for the given tariff item, the variant is returned as invalid.
	
- System calculates
- Net credit amount (NCA, according to Net credit amount definition) (NumberOfAdvancedPayments = 0)
- Provided credit amount (PCA, according to Provided Credit Amount definition)
{ADD PCG-5652}ID only: Provided credit amount without insurance according Provided Credit Amount Without Insurance  {/ADD}
System calculates AnnuityBase  = AnnuityBaseAmount - DownPayment (for calculation of AnnuityBaseAmount see Annuity base amount definition). 
{ADD PCG-5652}ID only: System calculates AnnuityBaseWithoutInsurance = AnnuityBaseAmount - DownPayment }for calculation of AnnuityBaseWithoutInsurance see Annuity base without Insurance) {/ADD}
If the value cannot be calculated because a needed percentage-based-on amount or limit-based-on amount or limit-based-on number is not yet countable for the given tariff item, the variant is returned as invalid.
	
- System calculates Annuity according to Annuity calculation with parameters:
- ProductVariant.AIR (interest rate)
- ProductVariant.TERM (number of terms)
- AnnuityBase
- InstallmentScheduleMethod
- Product.ProductProfile.DayCountMethod
- If Topup service (ServiceType = TOPUP) is selected on offer, then StartDate = FirstDueDate + TopupInstallmentsNumber(in months) - 1(month), else StartDate = Loan Providing Date calculated in previous steps
- If Topup service (ServiceType = TOPUP) is selected on offer, then FirstDueDate = FirstDueDate + TopupInstallmentsNumber(in months), else FirstDueDate = First Due Date calculated in previous steps
If the annuity is not higher than zero, the offer is returned as invalid.
{ADD PCG-5652}ID only: System calculates Annuity according to Annuity without Insurance calculation with parameters:
- ProductVariant.AIR (interest rate)
- ProductVariant.TERM (number of terms)
- AnnuityBaseWithoutInsurance
- InstallmentScheduleMethod
- Product.ProductProfile.DayCountMethod
- If Topup service (ServiceType = TOPUP) is selected on offer, then StartDate = FirstDueDate + TopupInstallmentsNumber(in months) - 1(month), else StartDate = Loan Providing Date calculated in previous steps
- If Topup service (ServiceType = TOPUP) is selected on offer, then FirstDueDate = FirstDueDate + TopupInstallmentsNumber(in months), else FirstDueDate = First Due Date calculated in previous steps
If the AnnuityWithoutInsurance is not higher than zero, the offer is returned as invalid.
{/ADD}
	
- System calculates total monthly payment according to Total Monthly Payment definition. If the value cannot be calculated because a needed percentage-based-on amount or limit-based-on amount is not yet calculated for the given tariff item, the variant is returned as invalid.
{ADD PCG-5652}ID only: System calculates monthly payment without insurance according to Monthly Payment Without Insurance. If the value cannot be calculated because a needed percentage-based-on amount or limit-based-on amount is not yet calculated for the given tariff item, the variant is returned as invalid.
{/ADD}
	
- System checks the calculated monthly payment against the preferred value (if inputted). If calculated monthly payment is not in interval <X%;100%> of MaximalMonthlyPayment (where X is defined as GlobalParameter. InstallmentLowLimit"), system returns the variant as invalid and this algorithm ends. MaximalMonthlyPayment is value entered in Product Calculator form or value Annuity_Max from LAP vector.
	
- System calculates cash payment (see Cash payment definition) and checks it against preferred values (if inputted). If the following is not true, the variant is invalid and this algorithm ends: PreferredMinimalCashPayment <= CalculatedCashPayment <= PreferredMaximalCashPayment.
If the value of CashPayment cannot be calculated because a needed percentage-based-on amount or limit-based-on amount is not yet calculable for the given tariff item, the variant is returned as invalid.
Calculation and checking of Cash Payment is skipped for recalculation (Cash Payment is taken from original offer).
	
- {ADD PCG-5767}PH only: System calculates remaining cash payment (RCP). RCP = calculated cash payment - trade in amount.
	
- System checks the calculated Down payment and reaming cash payment. if Down payment < trade in amount or remaining cash payment < 0, the variant is returned as invalid.{ADD/}

## 🔗 Connections (14)

- → Dependency: [[{ADD}Annuity base without Insurance]]
- → Dependency: [[{MOD}Net Credit Amount definition]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[{ADD}Annuity without Insurance calculation]]
- → Dependency: [[{ADD}Monthly Payment Without Insurance]]
- → Dependency: [[Cash payment definition]]
- → Generalization: [[{MOD}Offer Calculation Algorithm]]
- → Dependency: [[Down payment]]
- → Realisation: [[REQ#1 Change of PIR calculation in STANDARD algorithm]]
- → Dependency: [[{ADD}Provided Credit Amount Without Insurance]]
- → Dependency: [[{MOD}Annuity base amount definition]]
- → Dependency: [[Provided Credit Amount definition]]
- → Association: [[REQ#2 A new output attribute remaining cash payment from product calculator]]

## 📊 Appears In (5 diagrams)

- Custom: Offer Calculation algorithm - STANDARD
- Custom: Offer Calculation algorithms
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
- Custom: PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
- Logical: Various things
