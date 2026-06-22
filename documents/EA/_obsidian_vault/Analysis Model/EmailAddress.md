---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813601
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 emailAddress

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 📝 Notes

LDM: only contacts with Contact Type.Category Type=EMAIL

## 🔗 Connections (4)

- ← Dependency: [[employmentInfo]]
- ← Dependency: [[relatedPersonInfo]]
- → Generalization «XSDextension»: [[abstractContact]]
- ← Dependency: [[{MOD}partyRole]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| email | string |  |
