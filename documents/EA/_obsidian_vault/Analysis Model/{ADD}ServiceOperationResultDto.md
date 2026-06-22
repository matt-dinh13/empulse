---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1159293
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ServiceOperationResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

{ADD CBL-27 /}
Result type of service operations (service adding and switching)

## 🔗 Connections (3)

- ← Dependency: [[{ADD}ProcessServiceOperationNotificationRequest]]
- → Dependency: [[{ADD}ServiceOperationTypeDto]]
- → Dependency: [[{ADD}ServiceResultTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationsWS - Service operation notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| effectiveDate | date |  |
| errorReason | string |  |
| serviceOperationType | ServiceOperationTypeDto |  |
| resultType | ResultTypeDto |  |
| requestID | string |  |
