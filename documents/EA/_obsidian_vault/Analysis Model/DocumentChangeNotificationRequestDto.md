---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Document notification"
domain: "Analysis Model"
element_id: 1564211
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DocumentChangeNotificationRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Document notification

## 📝 Notes

{ADD CSI-116 /}

## 🔗 Connections (2)

- → Dependency: [[ActionTypeDto]]
- ← Dependency: [[DocumentNotificationMessage]]

## 📊 Appears In (1 diagrams)

- Logical: Document change notification from CAB

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| externalId | string |  |
| documentType | string |  |
| timestamp | datetime |  |
| action | AttributeDto |  |
