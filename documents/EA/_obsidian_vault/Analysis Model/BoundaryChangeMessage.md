---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/CSD notification messages/Boundaries"
domain: "Analysis Model"
element_id: 1718342
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 BoundaryChangeMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/CSD notification messages/Boundaries

## 📝 Notes

Notification for Boundary change.

Key for Boundary identification is code, boundaryType. Other attributes are subject of change.

Notifications are processed asynchronously in CSD_IMPORT job. This job can be registered manually.

## 📊 Appears In (1 diagrams)

- Logical: Boundary change notification message

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeId | string |  |
