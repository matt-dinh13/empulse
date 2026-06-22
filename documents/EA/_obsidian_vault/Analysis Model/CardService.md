---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Services"
domain: "Analysis Model"
element_id: 1720580
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CardService

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Services

## 📝 Notes

It presents an extension of Contract Service entity with payment card parameters of the card service accepted by client.

## 🔗 Connections (1)

- ← Dependency: [[LoanService]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cardNumber | string |  |
| issueMethod | string |  |
| issueFormat | Card Issue Format Type |  |
| holderName | string |  |
| expirationDate | date |  |
| salesroomCode | string |  |
