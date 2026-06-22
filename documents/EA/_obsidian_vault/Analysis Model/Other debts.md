---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Financial data"
domain: "Analysis Model"
element_id: 1772606
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Other debts 

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Financial data

## 📝 Notes

If any of the checkboxes in panel "Financial situation" except Credit card (CRCD) is checked - value in the field "Monthly amount of other debts" must be > 0.
If checkbox Credit card is checked then value in the field  "Monthly amount of other debts" must be  >= 0.

## 🔗 Connections (1)

- ← Dependency: [[Monthly amount of other debts (Action 1772614)]]

## 📊 Appears In (1 diagrams)

- Custom: Financial data
