---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Access Rights"
domain: "Analysis Model"
element_id: 1820896
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}02.845 Provide Products for Finacing of Commodity for External system

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Access Rights

## 📝 Notes

{DEL LOR-8678/}
This use case describes how BSL provides information about Products and related Product Variants, which can be used for financing of commodity on given salesroom. List of Products can be filtered by defined set of Product Profiles .
Realized as WS.

## 🔗 Connections (5)

- ← Realisation: [[{DEL}CustomerOfferWS]]
- → Dependency: [[{MOD}Prepare InfoForCommodityType]]
- → Realisation: [[{DEL}02.845 Provide Products for Finacing of Commodity for External system]]
- → Dependency: [[GetProductsForCommodityRequest - validation rules]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
- Logical: CustomerOfferWS - GetProductsForCommodity
- Use Case: Product Calculator for External system - Provide Data
