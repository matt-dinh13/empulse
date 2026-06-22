---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878840
diagrams: 5
connections: 9
tags:
  - requirement
  - modules
---

# 📋 Provided Credit Amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

For loans with ProductType = CEL and ProductType = SAI the Provided Credit Amount (PCA) defines total provided principal. 
For loans with ProductType = REL the Provided Credit Amount (PCA) defines provided principal for initial transaction.

For loans with initial transaction (InitialTransactionType <> NDF) it is net credit amount (NCA, see Net credit amount definition) plus sum of all fees which go into principal (e.g. origination fee, insurance premium, etc.):
PCA = NCA + Sum(Fees involved into principal)

For Fees involved into principal see Origination fees amount definition and Service fees amount definition.

Fees involved into principal are  fees where TariffItemType.Charging Periodicity = 'ONE_TIME' and rule Is Flag on Tariff Item Type (TariffItemType from input, TO_PRINCIPAL) returns True.

For loans without initial transaction (InitialTransactionType = NDF)  the PCA = 0.

For loans with initial transaction type = NDF and ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true:
PCA = NCA

## 🔗 Connections (9)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Dependency: [[Credit amount definition]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[{MOD}Net Credit Amount definition]]

## 📊 Appears In (5 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Financial calculations
- Custom: Offer Calculation algorithm - STANDARD
