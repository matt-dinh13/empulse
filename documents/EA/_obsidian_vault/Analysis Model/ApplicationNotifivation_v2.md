---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v2"
domain: "Analysis Model"
element_id: 1612689
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationNotifivation_v2

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v2

## 🔗 Connections (2)

- → Dependency: [[EventData]]
- → Generalization: [[AsynchronousMessage]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationEventNotification_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventCode | string |  |
| timeStamp | datetime |  |
| evetData | EventData |  |
