---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification"
domain: "Analysis Model"
element_id: 1634509
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 MessageAttribute

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification

## 📝 Notes

Individual message attribute (variable key and value) related to the respective error message.

LDM source:

	
- key = name of the variable used within the respective messageCode
	
- value = value of the variable used within the respective messageCode

## 🔗 Connections (2)

- ← Dependency: [[MessageAttributes (Class 1634507)]]
- → Generalization «XSDextension»: [[KeyValueType]]

## 📊 Appears In (3 diagrams)

- Logical: ApplicationFailureNotification - Common
- Logical: LoanAgreementFailureNotification - Common
- Logical: ValidationErrors
