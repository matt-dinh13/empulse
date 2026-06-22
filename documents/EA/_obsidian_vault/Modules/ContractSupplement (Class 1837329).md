---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Generated Messages/Contract Supplement notifications"
domain: "Modules"
element_id: 1837329
diagrams: 1
connections: 10
tags:
  - class
  - modules
---

# 🔷 ContractSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Generated Messages/Contract Supplement notifications

## 📝 Notes

Contract Supplement notification payload structure

## 🔗 Connections (10)

- → Usage: [[SupplementDocument]]
- → Usage: [[AccountTransactionSupplement]]
- → Usage: [[CustomData (Class 1837333)]]
- ← Generalization: [[ContractSuplementCreated]]
- ← Generalization: [[ContractSupplementSigned]]
- → Usage: [[ContractSupplementStatusTransition]]
- → Usage: [[RequestSourceId (Class 1837325)]]
- ← Generalization: [[ContractSupplementDocumentPrepared]]
- → Usage: [[RelatedSubject (Class 1837323)]]
- ← Generalization: [[ContractSupplementCancelled]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| supplementTypeCode | string |  |
| id | string |  |
| documents | SupplementDocument |  |
| currentStatus | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
| requestSource | RequestSourceId |  |
| supplementId | string |  |
| accountTransactionSupplement | AccountTransactionSupplement |  |
