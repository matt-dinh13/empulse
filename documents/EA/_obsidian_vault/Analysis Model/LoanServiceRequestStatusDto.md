---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855679
diagrams: 4
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestStatusDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

Service request status log structure

## 🔗 Connections (2)

- ← Dependency: [[LoanServiceRequestRequest (Class 1855681)]]
- → Dependency: [[LoanServiceRequestStatusTypeDto]]

## 📊 Appears In (4 diagrams)

- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - CEL Rewards
- Logical: Loan Service Request notifications - CET&FER request
- Logical: Loan Service Request notifications - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| changeType | LoanServiceRequestStatusTypeDto |  |
| changeDate | dateTime |  |
