---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589764
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfoPaymentItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

List of all partial outgoing payments connected to contract for processed outgoing payment 
{DEL}(for info for retailer, it contains even payment which are not included within the outgoing payment order).{/DEL}

## 🔗 Connections (2)

- → Dependency: [[ContractInfoPaymentSubvItem]]
- ← Dependency: [[ContractInfo (Class 1589761)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| paymentType | Outgoing Payment Type |  |
| paymentID | string |  |
| loanCode | string |  |
| subventionS | ContractInfoPaymentSubvItem |  |
