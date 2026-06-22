---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773437
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 SearchApplicationEvent validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- salesroom - must be code of Salesroom (in HOMESIS)
	
- performedBy- must be Employee Number from User
	
- performedFrom - must be between performedTo and performedTo - 30 days; if not filled, sysdate -7 is used
	
- performedTo - if not filled, sysdate is used
	
- eventType


At least one of values salesroom or performedBy must be filled (does not apply if user has access right 01.164 Search for application - without search criteria).

## 🔗 Connections (3)

- → Dependency: [[01.164 Search for application - without search criteria]]
- ← Dependency: [[SearchApplicationCriteria validation]]
- ← Generalization: [[SearchApplicationEvent validation -IN]]

## 📊 Appears In (1 diagrams)

- Custom: Search Validation Rules
