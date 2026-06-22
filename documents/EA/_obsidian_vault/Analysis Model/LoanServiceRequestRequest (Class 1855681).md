---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855681
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

Message for notification about changes of Loan Service Request of a type related to particular Contract

## 🔗 Connections (5)

- → Dependency: [[LoanServiceRequestStatusDto]]
- → Dependency: [[ContractSystemEventType (Enumeration 1855677)]]
- → Association: [[RequestParametersChoice]]
- → Dependency: [[LoanServiceRequestTypeDto]]
- → Dependency: [[ServiceOperationStatusTypeDto]]

## 📊 Appears In (4 diagrams)

- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - CEL Rewards
- Logical: Loan Service Request notifications - CET&FER request
- Logical: Loan Service Request notifications - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| eventType | ContractSystemEventType |  |
| requestId | string |  |
| expirationDate | date |  |
| requestType | LoanServiceRequestTypeDto |  |
| requestChanges | LoanServiceRequestStatusDto |  |
| serviceOperationStatus | ServiceOperationStatusTypeDto |  |
| requestOrigination | string |  |
| {ADD}customerId | long |  |
