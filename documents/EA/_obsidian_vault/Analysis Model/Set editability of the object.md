---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1822794
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Set editability of the object

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

Editability of the field is set according to the source, which was used for its prefilling.

If the field has AF Element Configuration->AF Element Prefill Configuration[Prefill source=source].Editable=TRUE, then it is editable, otherwise it is non-editable.

## 🔗 Connections (2)

- ← Dependency: [[Application form construction]]
- ← Generalization: [[Set editability of the object - excel configuration]]

## 📊 Appears In (3 diagrams)

- Custom: AF definition - IN
- Custom: AF definition - VN
- Custom: Product business rules
