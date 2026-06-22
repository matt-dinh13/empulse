---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1107134
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ProcessServiceOperationNotificationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

{ADD CBL-27 /}
Service adding and switch on off notification request notifies about the successful adding and service on/off switching.

## 🔗 Connections (2)

- → Dependency: [[{ADD}ServiceOperationResultDto]]
- ← Dependency «use»: [[AccountNotificationWS]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationsWS - Service operation notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}serviceOperationResult | ServiceOperationResultDto |  |
