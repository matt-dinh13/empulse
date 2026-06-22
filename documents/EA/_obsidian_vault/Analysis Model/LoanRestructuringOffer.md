---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850949
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 LoanRestructuringOffer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 📝 Notes

The entity holds list of offers to loan restructuring which are returned by the approval process

## 🔗 Connections (1)

- ← Dependency: [[LoanRestructuringRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annuity | Financial Amount |  |
| totalMonthlyPayment | Financial Amount |  |
| interestRate | Percentage |  |
| presentedInterestRate | Percentage |  |
| term | int |  |
| providedCreditAmount | Financial Amount |  |
| chosenFlag | boolean |  |
