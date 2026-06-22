---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1"
domain: "Analysis Model"
element_id: 1811216
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1

## 📝 Notes

Contract Supplement data structure

## 🔗 Connections (4)

- ← Usage: [[TransactionSupplement_v2]]
- ← Usage: [[TransactionSupplement (Class 1811220)]]
- → Usage: [[RelatedSubject (Class 1811226)]]
- ← Usage: [[Transaction (Class 1879320)]]

## 📊 Appears In (4 diagrams)

- Logical: Transaction Supplement - Create Transaction Supplement
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement
- Logical: Transaction Supplement - Get Transaction Supplement v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| documents | SupplementDocument |  |
| currentStatus | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| supplementTypeCode | string |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
