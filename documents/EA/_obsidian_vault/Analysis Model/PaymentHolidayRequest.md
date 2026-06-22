---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850934
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentHolidayRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 📝 Notes

A request entity keeping parameters of particular loan service request

## 🔗 Connections (2)

- → Generalization: [[Loan Service Request (Class 1868549)]]
- ← Dependency: [[LoanServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| deferredPeriodStartDate | date |  |
| deferredPeriodsNumber | int |  |
| firstDeferredDueDate | date |  |
| firstDeferredInstallmentNumber | int |  |
