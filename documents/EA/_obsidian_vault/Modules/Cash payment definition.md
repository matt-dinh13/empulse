---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878846
diagrams: 4
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Cash payment definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

Value is calculated only for InitialTransactionType in (POS, CASH) or (ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true), for other types is returned 0.
CashPayment =  DownPayment + Sum(OriginationFees which should be paid in advance) + Sum(ServiceFees paid in advance)
For OriginationFees see Origination fees amount definition.
For ServiceFees see Service fees amount definition.
For DownPayment see Down payment.

## 🔗 Connections (7)

- ← Dependency: [[{MOD}Revolving (REVOLVING)]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- ← Dependency: [[Total Payment Per Credit]]

## 📊 Appears In (4 diagrams)

- Custom: Financial calculations
- Custom: Offer Calculation algorithm - REVOLVING
- Custom: Offer Calculation algorithm - STANDARD
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
