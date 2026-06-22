---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications"
domain: "Analysis Model"
element_id: 1036812
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 notification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications

## 🔗 Connections (3)

- → Dependency: [[identificationResult]]
- → Dependency: [[businessProcess]]
- → Dependency: [[roles]]

## 📊 Appears In (1 diagrams)

- Logical: Party-notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceRequestId | string |  |
| notificationType | party:businessProcess |  |
| roles | roles |  |
| identificationResult | identificationResult |  |
| createdTs | string |  |
| createdBy | string |  |
| createdBySystem | string |  |
| businessId | long |  |
