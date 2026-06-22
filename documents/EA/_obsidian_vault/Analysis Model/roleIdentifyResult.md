---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813608
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 roleIdentifyResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[customerPersonIdentifyResponse]]
- → Dependency: [[identificationResultCode]]
- → Generalization «XSDextension»: [[abstractMetaResult]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonIdentify
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | long |  |
| resultCode | identificationResultCode |  |
