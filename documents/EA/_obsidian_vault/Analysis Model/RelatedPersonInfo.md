---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813637
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 relatedPersonInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (6)

- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- → Dependency: [[socialNetwork]]
- → Dependency: [[phoneNumber]]
- → Dependency: [[postalAddress]]
- → Dependency: [[emailAddress]]
- ← Dependency: [[customerPersonRelationship]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customValues | customEntryWrapper |  |
| postalAddress | postalAddress |  |
| relatedPersonType | string |  |
| firstName | string |  |
| id | long |  |
| lastName | string |  |
| middleName | string |  |
| emailAddress | emailAddress |  |
| phoneNumber | phoneNumber |  |
| socialNetwork | socialNetwork |  |
| officialYn | boolean |  |
| verificationLevel | integer |  |
