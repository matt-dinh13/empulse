---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents"
domain: "Analysis Model"
element_id: 1746129
diagrams: 6
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Document attributes visibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents

## 📝 Notes

Application detail
Visibility of document attributes is defined by Document_Type and by business rules - initial state of document attribute and update state of document attribute, which depends on the configuration of every country.
If Contract.Created remotely=TRUE, then used business rule is always update state of document attribute.

Contract detail
Document attribute is visible when at least one condition is fulfilled:

	
- Document attribute value is not empty {ADD TFT-10175}and set to visible{/ADD}
	
- Document attribute is set to be visible and editable

## 🔗 Connections (6)

- ← Dependency: [[Document attributes (Class 1613318)]]
- ← Dependency: [[Document attributes (Class 1744170)]]
- ← Dependency: [[Document attributes (Class 1750668)]]
- ← Dependency: [[Document attributes (Class 1784571)]]
- ← Dependency: [[Document attributes (Class 1819642)]]
- ← Dependency: [[Document attributes (Class 1821033)]]

## 📊 Appears In (6 diagrams)

- Custom: Tab - Application documents
- Custom: Tab - Client documents
- Custom: Tab - Direct debit mandates
- Custom: Tab-Client documents
- Custom: Tab-Contract documents
- Custom: Tab-Direct debit mandates
