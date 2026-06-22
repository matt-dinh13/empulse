---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773420
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Search application validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

System validates input request according to SearchApplicationCriteria validation. If validation of any field fails, response code is set to INVALID_SEARCH_ATTRIBUTE and each validation has its own validationError constructed according to Create validation error message. All validations are always performed even if any of them fails.

## 🔗 Connections (3)

- → Dependency: [[Create validation error message]]
- → Dependency: [[SearchApplicationCriteria validation]]
- ← Dependency: [[01.164 Search for application (UseCase 1879288)]]

## 📊 Appears In (1 diagrams)

- Custom: Search Validation Rules
