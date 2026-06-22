---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813612
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 phoneNumber

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 📝 Notes

LDM: only contacts with Contact Type.Category Type=PHONE

## 🔗 Connections (4)

- ← Dependency: [[{MOD}partyRole]]
- ← Dependency: [[relatedPersonInfo]]
- → Generalization «XSDextension»: [[abstractContact]]
- ← Dependency: [[employmentInfo]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| countryCode | string |  |
| extension | string |  |
| number | string |  |
