---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v1"
domain: "Analysis Model"
element_id: 1571021
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationEventNotification_v1

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v1

## 🔗 Connections (3)

- → Dependency: [[identificationAttribute]]
- → Generalization: [[AsynchronousMessage]]
- → Dependency: [[EventCode]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationEventNotification_v1
- Logical: Asynchronous Message

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventCode | EventCode |  |
| timestamp | long |  |
| identificationAttribute | identificationAttribute |  |
