---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common"
domain: "Analysis Model"
element_id: 1813615
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 roleMergeResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[customerPersonMergeResponse]]
- → Dependency: [[partyMergeResultCode]]
- → Generalization «XSDextension»: [[abstractMetaResult]]

## 📊 Appears In (1 diagrams)

- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | partyMergeResultCode |  |
| mergedRole | {MOD}partyRole |  |
| notification | {ADD}notification |  |
