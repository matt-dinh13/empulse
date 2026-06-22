---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common"
domain: "Analysis Model"
element_id: 1813628
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 roleGetResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[customerPersonGetResponse]]
- → Dependency: [[roleGetResultCode]]
- → Generalization «XSDextension»: [[abstractMetaResult]]

## 📊 Appears In (1 diagrams)

- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| foundRole | {MOD}partyRole |  |
| succedentExternalIds | long |  |
| resultCode | roleGetResultCode |  |
