---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813605
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 postalAddress

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (6)

- → Dependency: [[contactStatus]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- ← Dependency: [[relatedPersonInfo]]
- ← Dependency: [[employmentInfo]]
- ← Dependency: [[{MOD}partyRole]]
- ← Dependency: [[party]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| country | string |  |
| region | stringCodeOrValue |  |
| district | stringCodeOrValue |  |
| subDistrict | stringCodeOrValue |  |
| locality | stringCodeOrValue |  |
| town | stringCodeOrValue |  |
| street | stringCodeOrValue |  |
| postCode | stringCodeOrValue |  |
| residenceFrom | string |  |
| addressCompliance | stringCodeOrValue |  |
| customValues | customEntryWrapper |  |
| officialYn | boolean |  |
| contactStatus | contactStatus |  |
| flat | string |  |
| classification | string |  |
| block | string |  |
| floor | string |  |
| house | string |  |
| landmark | string |  |
| latitude | string |  |
| longitude | string |  |
| verificationLevel | integer |  |
