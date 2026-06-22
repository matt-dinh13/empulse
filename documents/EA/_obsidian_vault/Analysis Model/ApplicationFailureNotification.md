---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification"
domain: "Analysis Model"
element_id: 1819545
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationFailureNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification

## 📝 Notes

General base for notifications about various application-related failure events.

## 🔗 Connections (4)

- → Dependency: [[ValidationErrors (Class 1634506)]]
- ← Generalization: [[ApplicationDocumentationPreparationFailedNotification]]
- ← Generalization: [[ApplicationSigningFailedNotification]]
- → Generalization: [[ApplicationNotification]]

## 📊 Appears In (2 diagrams)

- Logical: Application Notification
- Logical: ApplicationFailureNotification - Common

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorCode | string |  |
| validationErrors | ValidationErrors |  |
