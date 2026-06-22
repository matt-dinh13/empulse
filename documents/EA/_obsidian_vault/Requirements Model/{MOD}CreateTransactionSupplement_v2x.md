---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute"
domain: "Requirements Model"
element_id: 1699256
diagrams: 1
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}CreateTransactionSupplement_v2x

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute

## 📝 Notes

{MOD CSI-1800 /}
Input parameters for Transaction Supplement creation

## 🔗 Connections (1)

- ← Usage: [[TransactionSupplements_v2 (Interface 1763826)]]

## 📊 Appears In (1 diagrams)

- Logical: BNPL - Create Transaction Supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| relatedSubjects | RelatedSubject |  |
| {DEL}approvalRequestId | string |  |
| {ADD}supplementDefinitionId | string |  |
| sourceSystem | RequestSourceId |  |
| transactionType | string |  |
| applicationCode | string |  |
