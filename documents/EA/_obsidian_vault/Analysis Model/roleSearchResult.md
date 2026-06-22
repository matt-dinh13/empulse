---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813593
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 roleSearchResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (5)

- ← Generalization «XSDextension»: [[customerOrganizationSearchResponse]]
- ← Generalization «XSDextension»: [[customerPersonSearchResponse]]
- → Dependency: [[roleSearchResultCode]]
- → Generalization «XSDextension»: [[abstractMetaResult]]
- → Dependency: [[{MOD}partyRole]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonSearch
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | roleSearchResultCode |  |
| items | {MOD}partyRole |  |
