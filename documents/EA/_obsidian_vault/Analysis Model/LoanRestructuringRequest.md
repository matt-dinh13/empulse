---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850951
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 LoanRestructuringRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 📝 Notes

A request entity keeping parameters of particular loan service request

## 🔗 Connections (3)

- → Generalization: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[LoanRestructuringOffer]]
- ← Dependency: [[LoanServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| preferredMonthlyInstallment | Financial Amount |  |
| firstDueDateRestructured | date |  |
| restructuringStartDate | date |  |
| saidRequestReason | Request Reason Type |  |
| totalAmountRestructured | Financial Amount |  |
| principalAmountRestructured | Financial Amount |  |
| interestAmountRestructured | Financial Amount |  |
| otherAmountRestructured | Financial Amount |  |
| keepInstallmentAmount | bool |  |
| restructuringStartInstallment | int |  |
| offers | LoanRestructuringOffer |  |
