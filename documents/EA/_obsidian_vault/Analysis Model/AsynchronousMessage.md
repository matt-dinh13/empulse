---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v1"
domain: "Analysis Model"
element_id: 1546874
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AsynchronousMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v1

## 📝 Notes

General object of Apache Kafka Message used for distribution of various information to consuming systems.

Only the not null elements are actually incorporated in particular message structures (i.e. null elements will be never sent).

## 🔗 Connections (5)

- ← Generalization: [[ApplicationEventNotification_v1 (Class 1571021)]]
- ← Generalization: [[Time to event]]
- ← Generalization: [[ApplicationNotifivation_v2]]
- ← Generalization: [[LoanApplicationData_v1 (Class 1741108)]]
- ← Generalization: [[LoanApplicationData_v2 (Class 1741201)]]

## 📊 Appears In (4 diagrams)

- Logical: ApplicationEventNotification_v1
- Logical: ApplicationEventNotification_v2
- Logical: Asynchronous Message
- Logical: LoanApplicationData_v2
