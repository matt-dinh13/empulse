---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN"
domain: "Analysis Model"
element_id: 1819517
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Employment validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN

## 📝 Notes

- employerName-Length60, Character set (with space)
	
- employerAddress – validated according to Address validation rule-IN
	
- department - Length60
	
- employedFrom - Must be in past, Date
	
- universityCourse - Length60
	
- economicalStatus

## 🔗 Connections (6)

- → Dependency: [[Length60]]
- → Dependency: [[Date (Requirement 1789783)]]
- → Dependency: [[Date in past]]
- → Dependency: [[Character set (with space)]]
- → Dependency: [[{MOD}Address validation rule-IN]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - IN
