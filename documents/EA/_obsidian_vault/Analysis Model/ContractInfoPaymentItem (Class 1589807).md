---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589807
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfoPaymentItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

List of all partial outgoing payments connected to contract for processed outgoing payment 
{DEL}(for info for retailer, it contains even payment which are not included within the outgoing payment order).{/DEL}

## 🔗 Connections (3)

- ← Dependency: [[ContractInfo (Class 1589813)]]
- → Dependency: [[Outgoing Payment Type]]
- → Dependency: [[ContractInfoPaymentSubvItem (Class 1589806)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| loanCode | string |  |
| paymentID | string |  |
| paymentType | Outgoing Payment Type |  |
| sourceSystem | string |  |
| sourceTxId | string |  |
| subventions | ContractInfoPaymentSubvItem |  |
