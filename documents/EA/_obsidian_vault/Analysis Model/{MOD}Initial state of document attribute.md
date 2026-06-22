---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules"
domain: "Analysis Model"
element_id: 1819378
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Initial state of document attribute

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules

## 📝 Notes

System prepares initial state of document attribute to be used in UI according to setting {DEL LOR-10350}in Behavior rule.{/DEL} {ADD LOR-10350}of document attributes in DMS (via API){/ADD}

	
- document attributes are by default OPTIONAL and VISIBLE


	
- if document attribute has REQUIRED state assigned, OPTIONAL state is changed to REQUIRED state.
	
- if document attribute has INVISIBLE state assigned, VISIBLE state is changed to INVISIBLE state.

## 🔗 Connections (6)

- ← Dependency: [[Attribute (Object 1773455)]]
- → Dependency: [[Behavior Rule (Class 1877889)]]
- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.103 Add client document (UseCase 1880236)]]
- ← Dependency: [[{MOD}01.100 Add contract document]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: LOR-10350 Application form - get rule setting for document type
