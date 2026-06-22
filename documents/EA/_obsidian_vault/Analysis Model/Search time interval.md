---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules"
domain: "Analysis Model"
element_id: 1584127
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Search time interval

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules

## 📝 Notes

The following must be true:
(DateCreatedTo - DateCreatedFrom) <= SEARCH_TIME_INTERVAL
Otherwise, an error message informing the user about exceeded time search interval is displayed.

## 🔗 Connections (1)

- ← Dependency: [[Contract search - time interval]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
