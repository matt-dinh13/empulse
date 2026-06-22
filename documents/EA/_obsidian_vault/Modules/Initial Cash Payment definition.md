---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878856
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Initial Cash Payment definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

Preferred minimal/maximal cash payment - values from input of product calculator (e.g. from calculator form for primary offer)

For primary and alternative offer
-- If preferred minimal cash payment is defined then 
---- InitCashPayment = maximum (preferred minimal cash payment, MinimalCashPaymentOnProduct)
---- roundingMode = UP
-- else
---- If preferred maximal cash payment is defined then
------ InitCashPayment = preferred maximal cash payment
------ roundingMode = DOWN

## 🔗 Connections (3)

- ← Dependency: [[Down payment]]
- ← Dependency: [[{MOD}Subsidized Principal calculation]]
- ← Dependency: [[Basic Principal calculation]]

## 📊 Appears In (1 diagrams)

- Custom: Financial calculations
