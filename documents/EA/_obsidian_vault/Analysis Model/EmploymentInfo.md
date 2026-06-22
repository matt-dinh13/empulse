---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813631
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 employmentInfo

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
| id | long |  |
| employmentType | stringCodeOrValue |  |
| profession | stringCodeOrValue |  |
| industry | stringCodeOrValue |  |
| employedFrom | string |  |
| officialYn | boolean |  |
| economicalStatus | stringCodeOrValue |  |
| customValues | customEntryWrapper |  |
| employerName | string |  |
| employerRegCode | string |  |
| employerTaxRegCode | string |  |
| postalAddress | postalAddress |  |
| emailAddress | emailAddress |  |
| phoneNumber | phoneNumber |  |
| socialNetwork | socialNetwork |  |
| verificationLevel | integer |  |
