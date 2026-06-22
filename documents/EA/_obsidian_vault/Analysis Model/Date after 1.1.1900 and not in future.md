---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Validation rules/PH/Client search form - PH"
domain: "Analysis Model"
element_id: 1635668
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Date after 1.1.1900 and not in future

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Validation rules/PH/Client search form - PH

## 📝 Notes

Date has to be after 1.1.1900 and not in future (=< current date).
Otherwise message INVALID_BIRTHDATE is displayed.

## 🔗 Connections (4)

- ← Dependency: [[Date of birth (Action 1471855)]]
- ← Dependency: [[{ADD} Birth Date]]
- ← Dependency: [[{ADD}Birth Date]]
- ← Dependency: [[Application validation rule-VN]]

## 📊 Appears In (4 diagrams)

- Custom: Client search form - PH
- Custom: Client Search Form - VN
- Custom: Personal data
- Custom: Validation rules-VN
