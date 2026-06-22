---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights"
domain: "Analysis Model"
element_id: 1827703
diagrams: 5
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.159 Reject offer

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Access Rights

## 📝 Notes

This use case describes how user can reject an optional offer.

## 🔗 Connections (8)

- ← Realisation: [[Refuse new offers]]
- → UseCase «include»: [[01.360 Cancel contract (UseCase 1850507)]]
- → Realisation: [[01.159 Reject offer]]
- → Realisation: [[01.159 Reject offer (all salesrooms)]]
- → Dependency: [[Access control to Contract by Salesroom]]
- ← Dependency: [[Refuse new offers (GUIElement 1848501)]]
- ← Dependency: [[Refuse new offers (GUIElement 1871777)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Offer detail - Panel of buttons
- Custom: Operational buttons - application operations
- Custom: Panel of buttons
- Use Case: Accept/Reject optional offers
