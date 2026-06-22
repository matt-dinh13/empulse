---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)"
domain: "Analysis Model"
element_id: 1691079
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ServiceOperationResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)

## 📝 Notes

Result type of service operations (service adding and switching)

## 🔗 Connections (3)

- ← Dependency: [[ProcessServiceOperationNotificationRequest]]
- → Dependency: [[ServiceResultTypeDto]]
- → Dependency: [[ServiceOperationTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed messages - Process Service Operation Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| effectiveDate | date |  |
| errorReason | string |  |
| serviceOperationType | ServiceOperationTypeDto |  |
| resultType | ServiceResultTypeDto |  |
| requestID | string |  |
