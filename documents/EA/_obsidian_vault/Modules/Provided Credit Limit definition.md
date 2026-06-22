---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878841
diagrams: 4
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Provided Credit Limit definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

Provided Credit Limit (PCL) is Net credit limit (NCL, see Net credit limit definition) plus sum of all fees which go into principal (e.g. origination fee, insurance premium, etc.). It is calculated only for ProductType = REL and ProductProfile.IsDebit = FALSE (for other products the PCL = 0). 

	
- PCL = NCL + Sum(Fees involved into principal) + Sum(ServiceFees involved into principal)


See Origination fees amount definition and Service fees amount definition.

Fees involved into principal are  fees where TariffItemType.Charging Periodicity = 'ONE_TIME' and rule Is Flag on Tariff Item Type (TariffItemType from input, TO_PRINCIPAL) returns True.

## 🔗 Connections (6)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Net Credit Limit definition]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Service fees amount definition]]

## 📊 Appears In (4 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Financial calculations
