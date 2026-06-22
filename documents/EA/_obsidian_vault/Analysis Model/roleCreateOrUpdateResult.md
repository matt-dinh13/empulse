---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813639
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 roleCreateOrUpdateResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (4)

- ← Generalization «XSDextension»: [[customerPersonCreateOrUpdateResponse]]
- → Dependency: [[roleUpdateResultCode]]
- → Dependency: [[roleCreateResultCode]]
- → Generalization: [[complexPersistResult]]

## 📊 Appears In (1 diagrams)

- Logical: customerPersonCreateOrUpdate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| isUpdate | boolean |  |
| createResultCode | roleCreateResultCode |  |
| updateResultCode | roleUpdateResultCode |  |
