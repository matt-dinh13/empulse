---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendEmailMessageWS"
domain: "Analysis Model"
element_id: 1148341
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AbstractMessageType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendEmailMessageWS

## 🔗 Connections (2)

- ← Generalization: [[PrioritizableMessageType]]
- → Dependency: [[BusinessAttributeType]]

## 📊 Appears In (1 diagrams)

- Logical: SendEmailMessageWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| systemCode | string |  |
| messageCode | string |  |
| effectiveDate | datetime |  |
| expires | datetime |  |
| attributes | BusinessAttributeType |  |
