---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules"
domain: "Analysis Model"
element_id: 1351200
diagrams: 2
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Address rules - KZ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules

## 📝 Notes

Region - when codelist value is selected:

	
- values of codelist for fields District and Town and ZIP code are filtered accordingly


District - when codelist value is selected:

	
- field Region is prefilled if empty
	
- values of codelist for field Town and ZIP codeis filtered accordingly


Town - when codelist value is selected:

	
- fields Region and District are prefilled if empty


	
- values of codelist for field ZIP code and Street is filtered accordingly


ZIP Code - when codelist value is selected:

	
- fields Region, District and Town are prefilled if empty

## 🔗 Connections (10)

- ← Dependency: [[District (GUIElement 1039584)]]
- ← Dependency: [[ZIP code (GUIElement 1039601)]]
- ← Dependency: [[Region (GUIElement 1039600)]]
- ← Dependency: [[District (GUIElement 1039593)]]
- ← Dependency: [[Town (GUIElement 1039590)]]
- ← Dependency: [[ZIP code (GUIElement 1039581)]]
- ← Dependency: [[Town (GUIElement 1039580)]]
- ← Dependency: [[ZIP code suffix (GUIElement 1039575)]]
- ← Dependency: [[Region (GUIElement 1039574)]]
- → Generalization: [[Address rules]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Edit address - KZ
