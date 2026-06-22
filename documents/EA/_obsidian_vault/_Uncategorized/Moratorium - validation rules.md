---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1275705
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Moratorium - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

- One of values (SERVICE.FullEarlyRepaymentService.Moratorium, SERVICE.FullEarlyRepaymentService.FullEarlyRepaymentServiceVariant.MoratoriumLength) must be set on the service. (MSG_MORATORIUM_NOT_SET)



	
- Only one of values (SERVICE.FullEarlyRepaymentService.Moratorium, SERVICE.FullEarlyRepaymentService.FullEarlyRepaymentServiceVariant.MoratoriumLength) can be set on the service. (MSG_MORATORIUM_DUPLICITY)

## 🔗 Connections (2)

- ← Dependency: [[Moratorium Length]]
- ← Dependency: [[Moratorium in months (GUIElement 1808566)]]
