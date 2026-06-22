---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482207
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfoPaymentItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

List of all partial outgoing payments connected to contract for processed outgoing payment (for info for retailer, it contains even payment which are not included within the outgoing payment order).

## 🔗 Connections (2)

- ← Dependency «use»: [[ContractInfo]]
- → Dependency «use»: [[MoneyType]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| paymentType | Outgoing Payment Type |  |
| paymentID | string |  |
| loanCode | string |  |
