---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878862
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Down payment

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

Value is calculated only for InitialTransactionType = POS or (ProductType = SAI and and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true, for other types is returned 0.
Calculation of initial value of DownPayment (later recalculated as NetCashPayment for Financial Parameters)
For rounding of Downpayment is used  
- GlobalParameter.AnnuityRoundingScale
- roundingMode (see below)

Init CashPayment is calculated according to the rule Initial Cash Payment definition.
For offer recalculation InitCashPayment = CashPayment from original offer.

If InitCashPayment is defined then
-- Downpayment = InitCashPayment - Sum(OriginationFees which should be paid in advance) - Sum(ServiceFees which should be paid in advance).
else
-- Downpayment = 0

For OriginationFees see Origination fees amount definition.
For ServiceFees see Service fees amount definition.
If DownPayment < 0, DownPayment = 0

## 🔗 Connections (5)

- ← Dependency: [[{MOD}Revolving (REVOLVING)]]
- ← Dependency: [[{MOD}Standard (STND)]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Initial Cash Payment definition]]
- → Dependency: [[Service fees amount definition]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations
- Custom: Offer Calculation algorithm - REVOLVING
- Custom: Offer Calculation algorithm - STANDARD
