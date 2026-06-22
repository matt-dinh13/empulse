---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1879047
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Save offers to Offer Repository

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

// Saves OfferRequest and corresponding OfferResults into Offer Repository  

Input:
- set of generated product offers 
Output:
- code of Offer Request 

If GlobalParameter.UseOfferRepository = False then return.

Create new Offer Request (do not fill the data structure of the Request except for the Request.Code).

For each offer from the set of generated product offers
- Create Offer Result and fill the structure by data of offer
- Assign Offer Result to Offer Request
Continue with the next offer

For creating of Offer Result see rules:
Mapping of Offer Result Product to OFP
Mapping of Offer Result Presented Interest Rate to OFP
Mapping of Offer Result Transaction to OFP
Mapping of Offer Result Service to OFP
Mapping of Offer Result Tariff Item to OFP

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Calculate product offer]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Offer recalculation
