---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common"
domain: "Analysis Model"
element_id: 1813625
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 roleSplitResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[customerPersonSplitResponse]]
- → Dependency: [[partySplitResultCode]]
- → Generalization «XSDextension»: [[abstractMetaResult]]

## 📊 Appears In (1 diagrams)

- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | partySplitResultCode |  |
| splitRole | {MOD}partyRole |  |
| notification | {ADD}notification |  |
