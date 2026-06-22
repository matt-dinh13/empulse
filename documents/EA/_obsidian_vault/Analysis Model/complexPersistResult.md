---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common"
domain: "Analysis Model"
element_id: 1813607
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 complexPersistResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Common

## 🔗 Connections (5)

- ← Generalization: [[roleCreateOrUpdateResult]]
- ← Generalization «XSDextension»: [[roleUpdateResult]]
- ← Generalization «XSDextension»: [[roleCreateResult]]
- ← Generalization «XSDextension»: [[roleRemoveResult]]
- → Generalization «XSDextension»: [[abstractMetaResult]]

## 📊 Appears In (1 diagrams)

- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | long |  |
| succedentIDs | long |  |
| notification | {ADD}notification |  |
