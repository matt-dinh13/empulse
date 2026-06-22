---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850946
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestStatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 🔗 Connections (2)

- ← Dependency: [[LoanServiceRequest]]
- → Dependency: [[LoanServiceRequestStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| changeDate | DateTime |  |
| reason | string |  |
| status | LoanServiceRequestStatusType |  |
