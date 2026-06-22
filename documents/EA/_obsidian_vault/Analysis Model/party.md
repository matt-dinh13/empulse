---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813602
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 party

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (6)

- → Dependency: [[partyType]]
- → Dependency: [[postalAddress]]
- → Dependency: [[document (Class 1813622)]]
- ← Generalization «XSDextension»: [[organization]]
- ← Generalization «XSDextension»: [[{MOD}person]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| partyType | partyType |  |
| customValues | customEntryWrapper |  |
| documents | document |  |
| postalAddress | postalAddress |  |
