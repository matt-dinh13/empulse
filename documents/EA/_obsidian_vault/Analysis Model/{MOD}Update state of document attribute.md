---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules"
domain: "Analysis Model"
element_id: 1819380
diagrams: 2
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Update state of document attribute

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules

## 📝 Notes

Document attribute can change its state {DEL LOR-10350}(see State type){/DEL} {ADD LOR-10350}(document attributes setting in DMS){/ADD} based on value of other attributes. At the moment system can evaluate:

	
- value of other related document attribute (set in Behavior_Rule.trigger)
	
- remote application (Temporary_Application.Created_remotely or Contract_Application.Created_remotely, depends where the functionality is triggred)

## 🔗 Connections (5)

- ← Dependency: [[Attribute (Object 1773455)]]
- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.103 Add client document (UseCase 1880236)]]
- ← Dependency: [[{MOD}01.100 Add contract document]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: LOR-10350 Application form - get rule setting for document type
