---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1877739
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {ADD}Provided Credit Amount Without Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

{ADD PCG-5652/}
For country: ID

For loans with ProductType = CEL the Provided Credit Amount Without Insurance (PCAWI) defines total provided principal without insurance fees going to principal.

For loans with initial transaction (InitialTransactionType <> NDF) it is net credit amount (NCA, see Net credit amount definition) plus sum of all fees which go into principal (e.g. origination fee, etc.) without insurance service fees going to principal:
PCA = NCA + Sum(Fees involved into principal except insurance service fees)

For Fees involved into principal see Origination fees amount definition and Service fees amount definition.
For insurance service fees see Insurance service fees 

Fees involved into principal are  fees where TariffItemType.Charging Periodicity = 'ONE_TIME' and rule Is Flag on Tariff Item Type (TariffItemType from input, TO_PRINCIPAL) returns True.

## 🔗 Connections (5)

- ← Dependency: [[{MOD}Standard (STND)]]
- → Dependency: [[{MOD}Net Credit Amount definition]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[{ADD}Insurance service fees]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
