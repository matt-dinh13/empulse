---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights"
domain: "Analysis Model"
element_id: 1827702
diagrams: 3
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.070 Show product offer detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights

## 📝 Notes

Purpose of this use case is to show product offer detail for
- primary offer
- optional offer. 
Information about down payment, annuity, number of terms, necessary documents etc. are shown.
If allowed for particular offer user can
- adjust selection of insurance services (primary offer)
- decrease credit limit (optional offer)

## 🔗 Connections (4)

- ← Realisation: [[Product offer detail (Screen 1755507)]]
- → Dependency: [[Get offer data]]
- → Realisation: [[01.070 Show product offer detail]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Offer detail
- Use Case: Offer detail
