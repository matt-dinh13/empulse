---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules"
domain: "Analysis Model"
element_id: 1657190
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Status of client data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules

## 📝 Notes

If global parameter CollectedDataAreUnofficial is set to TRUE, client's contact data are considered as unofficial (*.officialYn=false). Otherwise data are considered as active (*.officialYn= not filled (null value)).

Note
Parent entity of any client's contact data is considered as active, example:

	
- status of related person = active
	
- contact of related person = unofficial
	
- address of related person = unofficial

## 🔗 Connections (2)

- → Dependency: [[Client's contact data]]
- ← Dependency: [[BSL-to-CIF mapping]]

## 📊 Appears In (1 diagrams)

- Custom: Business Ruless
