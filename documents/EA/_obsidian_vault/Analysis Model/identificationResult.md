---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications"
domain: "Analysis Model"
element_id: 1036816
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 identificationResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications

## 🔗 Connections (3)

- ← Dependency: [[notification]]
- → Dependency: [[manualIdentificationResultCode]]
- → Dependency: [[manualIdentificationStatus]]

## 📊 Appears In (1 diagrams)

- Logical: Party-notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | long |  |
| result | party:manualIdentificationResultCode |  |
| status | party:manualIdentificationStatus |  |
