---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813594
diagrams: 2
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 partyRelationship

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (7)

- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- ← Generalization «XSDextension»: [[representativePersonRelationship]]
- ← Dependency: [[{MOD}partyRole]]
- ← Dependency: [[{MOD}partyRole]]
- → Dependency: [[partyRelationshipType]]
- ← Generalization «XSDextension»: [[customerOrganizationRelationship]]
- ← Generalization «XSDextension»: [[customerPersonRelationship]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| customValues | customEntryWrapper |  |
| partyRelationshipType | partyRelationshipType |  |
