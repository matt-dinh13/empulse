---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822783
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get Renewal Card Type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Input: 
- Service of type CRSPST (CardService)

If CardService.PersonalizedCardType is not null then return CardService.PersonalizedCardType 
else return CardService.InstantCardType

## 🔗 Connections (4)

- ← Dependency: [[Emboss name - validation rules]]
- ← Dependency: [[Default Emboss name]]
- ← Dependency: [[Assigning of instant card processing]]
- ← Dependency: [[01.185 Validate card number (UseCase 1878505)]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
