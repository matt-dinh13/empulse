---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813589
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 status

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (4)

- → Generalization «XSDextension»: [[abstractPifAuditableEntity]]
- ← Generalization «XSDextension»: [[contactStatus]]
- → Dependency: [[statusCategory]]
- ← Generalization «XSDextension»: [[roleStatus]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | long |  |
| statusType | string |  |
| statusCategory | statusCategory |  |
| thruDateTime | string |  |
| fromDateTime | string |  |
