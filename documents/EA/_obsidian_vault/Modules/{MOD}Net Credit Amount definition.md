---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878848
diagrams: 6
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {MOD}Net Credit Amount definition

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

Net credit amount defines the real amount of money asked by client to finance the initial transaction. It does not include fees which should be added to principal (e.g. origination fee, insurance premium):

For loans with initial transaction type = POS:
NCA = TotalPrice - SubventionDiscount - DownPayment.
SubventionDiscount is calculated according to rule Subvention Discount definition.
{ADD PCG-5669}
PH only: NCA = TotalPrice - Discount - DownPayment
Discount = SubventionDiscount + Discount amount
{/ADD}

For loans with initial transaction type = CASH:

	
- For Primary offer:
NCA = Preferred Loan amount (Loan amount asked by client) - Upfront fee
Upfront fee is defined as sum of all tariff items where:
- TariffItem.CalculationMethod = F
- TariffItem.TariffItemType.Category = F
- TariffItem.TariffItemType.Usage = A
- TariffItem.TariffItemType.ChargingPeriodicity = ONE_TIME
- TariffItem.TariffItemType.TariffItemTypeFlag.FlagType.TO_PRINCIPAL = FALSE
- TariffItem.TariffItemType.TariffItemTypeFlag.FlagType.DECREASE_LOAN_AMOUNT = TRUE
	
- For Optional offer:
If Required CreditAmount_Max is defined in LAP vector or Offer preferences with adjusted credit limit AND ((ProductType = CEL) OR (ProductType = REL and Required.CreditAmount_Max is less than NCA from originally chosen offer)) then NCA = Required.CreditAmount_Max 
Else NCA = NCA from originally chosen offer


For loans with initial transaction type = NDF:
NCA = 0.

For loans with initial transaction type = NDF and ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true:
NCA = Sum of fees involved into principal - DownPayment

For Fees involved into principal see Origination fees amount definition and Service fees amount definition.

Fees involved into principal are  fees where TariffItemType.Charging Periodicity = 'ONE_TIME' and rule Is Flag on Tariff Item Type (TariffItemType from input, TO_PRINCIPAL) returns True.

DownPayment is calculated according Down payment

## 🔗 Connections (6)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[{ADD}Provided Credit Amount Without Insurance]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Dependency: [[Provided Credit Amount definition]]

## 📊 Appears In (6 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculation of financial parameters of offer
- Custom: Financial calculations
- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
