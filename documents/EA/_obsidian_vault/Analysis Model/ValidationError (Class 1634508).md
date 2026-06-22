---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification"
domain: "Analysis Model"
element_id: 1634508
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ValidationError

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification

## 📝 Notes

Individual validation error identified during the respective failed operation.

## 🔗 Connections (2)

- ← Dependency: [[ValidationErrors (Class 1634506)]]
- → Dependency: [[MessageAttributes (Class 1634507)]]

## 📊 Appears In (3 diagrams)

- Logical: ApplicationFailureNotification - Common
- Logical: LoanAgreementFailureNotification - Common
- Logical: ValidationErrors

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorSource | string |  |
| messageCode | string |  |
| messageAttributes | MessageAttribute |  |
