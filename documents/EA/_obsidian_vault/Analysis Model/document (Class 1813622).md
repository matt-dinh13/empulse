---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813622
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 document

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (4)

- ← Dependency: [[{MOD}partyRole]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- ← Dependency: [[party]]
- → Dependency: [[customEntryWrapper]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| customValues | customEntryWrapper |  |
| issueDate | string |  |
| expirationDate | string |  |
| dmsId | string |  |
| issuer | stringCodeOrValue |  |
| documentType | string |  |
| detailUrl | string |  |
| verificationLevel | int |  |
| country | string |  |
| serialNumber | string |  |
| documentCode | string |  |
