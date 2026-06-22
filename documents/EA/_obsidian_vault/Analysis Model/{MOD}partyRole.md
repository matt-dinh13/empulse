---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813623
diagrams: 7
connections: 17
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}partyRole

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (17)

- ← Dependency: [[customerPersonGetResponse]]
- → Dependency: [[partyRoleType]]
- → Dependency: [[X-sell code encoding]]
- → Dependency: [[consent]]
- ← Generalization «XSDextension»: [[personRole]]
- → Dependency: [[document (Class 1813622)]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- → Dependency: [[socialNetwork]]
- → Dependency: [[roleStatus]]
- ← Generalization «XSDextension»: [[organizationRole]]
- → Dependency: [[phoneNumber]]
- → Dependency: [[postalAddress]]
- → Dependency: [[emailAddress]]
- → Dependency: [[partyRelationship]]
- → Dependency: [[partyRelationship]]
- ← Dependency: [[roleSearchResult]]
- → Dependency: [[customEntryWrapper]]

## 📊 Appears In (7 diagrams)

- Logical: customerPersonCreate
- Logical: customerPersonCreateOrUpdate
- Logical: customerPersonGetResponse
- Logical: customerPersonIdentify
- Logical: customerPersonSearch
- Logical: customerPersonUpdate
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| anonymizeYn | boolean |  |
| roleStatus | roleStatus |  |
| {MOD}postalAddress | postalAddress |  |
| {MOD}emailAddress | emailAddress |  |
| customValues | customEntryWrapper |  |
| externalId | long |  |
| consent | consent |  |
| id | long |  |
| partyRoleType | partyRoleType |  |
| {MOD}phoneNumber | phoneNumber |  |
| photoDirectLink | string |  |
| {MOD}socialNetwork | socialNetwork |  |
| relationshipFrom | partyRelationship |  |
| relationshipTo | partyRelationship |  |
| document | document |  |
| mysteryShopper | boolean |  |
