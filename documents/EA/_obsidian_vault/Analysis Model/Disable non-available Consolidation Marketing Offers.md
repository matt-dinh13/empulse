---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817941
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Disable non-available Consolidation Marketing Offers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

For each received Marketing Offer (i.e.PartyOffers.Offer):
If the Marketing Offer has assigned at least one product with consolidation service AND:
(user has not granted the privilege for 01.165 Display contracts to consolidate
OR
more than one product with consolidation service is assigned)
then consider the respective PartyOffers.Offer as unavailable (exclude it from the list of offers).

Continue with the next Marketing Offer.

## 🔗 Connections (4)

- ← Dependency: [[Product Marketing Offers]]
- ← Dependency: [[Is Marketing Offer available on Salesroom]]
- ← Dependency: [[Product Marketing Offers (Class 1848540)]]
- ← Dependency: [[Marketing Offer Limits]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules - Marketing Offers
- Custom: Customer offers
- Custom: Marketing Offer Limits
- Custom: Product Marketing Offers
