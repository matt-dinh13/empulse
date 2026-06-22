---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813624
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 consent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 📝 Notes

LDM: all documents with document type flag=CONSENT

## 🔗 Connections (3)

- ← Dependency: [[{MOD}partyRole]]
- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- → Dependency: [[customEntryWrapper]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| verificationLevel | int |  |
| consentType | string |  |
| issueDate | string |  |
| expirationDate | string |  |
| detailUrl | string |  |
| customValues | customEntryWrapper |  |
| dmsId | string |  |
| rejectReason | string |  |
