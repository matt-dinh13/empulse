---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Validation rules"
domain: "Analysis Model"
element_id: 966653
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Minimal search criteria - bank

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Validation rules

## 📝 Notes

At least one of following criteria has to be filled for bank search start:
- Bank name
- Bank code
- Bank status

If validation fails, then message MSG_MINIMAL_SEARCH_CRITERIA_FOR__BANK_ERROR is displayed.

## 🔗 Connections (1)

- ← Dependency: [[Minimal search criteria for bank]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
