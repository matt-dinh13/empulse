---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813634
diagrams: 6
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 personRole

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (4)

- → Generalization «XSDextension»: [[{MOD}partyRole]]
- → Dependency: [[{MOD}person]]
- ← Generalization «XSDextension»: [[customerPerson]]
- ← Generalization «XSDextension»: [[representativePerson]]

## 📊 Appears In (6 diagrams)

- Logical: customerPersonCreate
- Logical: customerPersonCreateOrUpdate
- Logical: customerPersonGetResponse
- Logical: customerPersonIdentify
- Logical: customerPersonUpdate
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| person | {MOD}person |  |
