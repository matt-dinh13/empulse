---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1819519
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 SearchApplicationCriteria validation - IN

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

At least one of values event with eventType= CREATE_APPLICATION or CUID must be filled. (does not apply if user has access right 01.164 Search for application - without search criteria).

## 🔗 Connections (4)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Generalization: [[SearchApplicationCriteria validation]]
- → Dependency: [[01.164 Search for application - without search criteria]]
- → Dependency: [[SearchApplicationEvent validation -IN]]

## 📊 Appears In (1 diagrams)

- Custom: Search Validation Rules
