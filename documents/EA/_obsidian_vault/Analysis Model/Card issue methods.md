---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822785
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Card issue methods

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

// Returns list of Card issue methods
Input:
- CardService (reference to particular version)

Find CardService and return list of card issue methods prepared as follows (possibilities in dependency on  Card Issue Method Type codelist):
If CardService.Instant_Card_Allowed = 'TRUE' then add 'INSTANT'
If CardService.Customized_Card_Allowed = 'TRUE' then add 'PERSONALIZED'

## 🔗 Connections (2)

- ← Dependency: [[Card issue method (GUIElement 1716426)]]
- ← Dependency: [[Card Service validation rule]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Custom: Validation Rules
