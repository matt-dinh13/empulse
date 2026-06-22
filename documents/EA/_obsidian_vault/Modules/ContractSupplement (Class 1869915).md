---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Cancel Contract Supplement"
domain: "Modules"
element_id: 1869915
diagrams: 4
connections: 10
tags:
  - class
  - modules
---

# 🔷 ContractSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Cancel Contract Supplement

## 📝 Notes

Contract Supplement object for API response

## 🔗 Connections (10)

- → Usage: [[AccountTransactionSupplement (Class 1869908)]]
- → Usage: [[ContractSupplementStatusTransition (Class 1869914)]]
- → Usage: [[SupplementDocument (Class 1869913)]]
- → Usage: [[RelatedSubject (Class 1869912)]]
- → Usage: [[CustomData (Class 1869911)]]
- → Usage: [[RequestSourceId (Class 1869903)]]
- ← Usage: [[ContractSupplements (Class 1869919)]]
- ← Usage: [[ContractSupplements (Interface 1869924)]]
- ← Usage: [[ContractSupplements (Interface 1869924)]]
- ← Usage: [[ContractSupplements (Interface 1869924)]]

## 📊 Appears In (4 diagrams)

- Logical: Cancel Contract Supplement method
- Logical: Common structures
- Logical: Create Contract Supplement
- Logical: Get Contract Supplements

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| supplementTypeCode | string |  |
| documents | SupplementDocument |  |
| currentStatus | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
| requestSource | RequestSourceId |  |
| supplementId | string |  |
| accountTransactionSupplement | AccountTransactionSupplement |  |
