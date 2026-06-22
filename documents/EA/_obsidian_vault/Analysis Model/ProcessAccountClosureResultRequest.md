---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1107137
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ProcessAccountClosureResultRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Notification concerning processing of result of account closure - request.
It contains a list of AccountClosureResultDto.

## 🔗 Connections (2)

- → Dependency: [[AccountClosureResultDto]]
- ← Dependency: [[AccountNotificationWS]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationWS - Account closure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountClosureResult | AccountClosureResultDto |  |
