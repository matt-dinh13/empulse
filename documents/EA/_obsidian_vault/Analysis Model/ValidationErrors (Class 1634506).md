---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification"
domain: "Analysis Model"
element_id: 1634506
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ValidationErrors

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification

## 📝 Notes

List of validation errors (wrapping elements), that were identified during the respective failed operation.

## 🔗 Connections (3)

- ← Dependency: [[LoanAgreementFailureNotification]]
- → Dependency: [[ValidationError (Class 1634508)]]
- ← Dependency: [[ApplicationFailureNotification]]

## 📊 Appears In (3 diagrams)

- Logical: ApplicationFailureNotification - Common
- Logical: LoanAgreementFailureNotification - Common
- Logical: ValidationErrors

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validationError | ValidationError |  |
