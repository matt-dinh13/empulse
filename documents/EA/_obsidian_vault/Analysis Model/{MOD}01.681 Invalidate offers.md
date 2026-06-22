---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights"
domain: "Analysis Model"
element_id: 1827696
diagrams: 2
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.681 Invalidate offers

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights

## 📝 Notes

This technical use case describes how system invalidates offers whose validity expired. This is a non-visual use case performed regularly once a day by the system.

## 🔗 Connections (4)

- → Association: [[Time (Actor 1880869)]]
- → UseCase «include»: [[01.360 Cancel contract (UseCase 1850507)]]
- → Realisation: [[01.681 Invalidate offers]]
- → Dependency: [[Invalidate Product Offers - job]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Invalidate offers
