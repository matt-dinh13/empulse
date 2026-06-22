---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)"
domain: "Analysis Model"
element_id: 1690995
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ProcessServiceOperationNotificationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)

## 📝 Notes

Service adding and switch on off notification request notifies about the successful adding and service on/off switching.

## 🔗 Connections (2)

- → Dependency: [[ServiceOperationResultDto]]
- ← Usage: [[AccountNotificationService]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed messages - Process Service Operation Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceOperationResult | ServiceOperationResultDto |  |
