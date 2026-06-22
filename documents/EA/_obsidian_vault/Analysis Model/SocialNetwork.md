---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813620
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 socialNetwork

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 📝 Notes

LDM: only contacts with Contact Type.Category Type<>EMAIL and PHONE

## 🔗 Connections (4)

- ← Dependency: [[relatedPersonInfo]]
- ← Dependency: [[{MOD}partyRole]]
- ← Dependency: [[employmentInfo]]
- → Generalization «XSDextension»: [[abstractContact]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| userName | string |  |
| profileHttpAddress | string |  |
