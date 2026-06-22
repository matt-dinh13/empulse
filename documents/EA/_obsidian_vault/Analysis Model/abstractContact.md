---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813614
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 abstractContact

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (5)

- → Dependency: [[contactStatus]]
- ← Generalization «XSDextension»: [[socialNetwork]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- ← Generalization «XSDextension»: [[phoneNumber]]
- ← Generalization «XSDextension»: [[emailAddress]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| customValues | customEntryWrapper |  |
| officialYn | boolean |  |
| classification | string |  |
| contactStatus | contactStatuses |  |
| verificationLevel | integer |  |
