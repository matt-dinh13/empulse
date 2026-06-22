---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications"
domain: "Analysis Model"
element_id: 1862871
diagrams: 10
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractSupplementStatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications

## 📝 Notes

A record of Contract Supplement changes

## 🔗 Connections (3)

- ← Usage: [[SupplementData]]
- ← Dependency: [[ContractSupplement (Class 1879315)]]
- ← Usage: [[SupplementData (Class 1879334)]]

## 📊 Appears In (10 diagrams)

- Logical: Contract Supplement Notifications
- Logical: Contract Supplement Notifications v3
- Logical: Contract Supplements - Get Contract Supplement by CUID v3
- Logical: Contract Supplements - Get Contract Supplement by CUID v4
- Logical: CreditLimitChangeSupplements - Get supplement
- Logical: Generated messages
- Logical: Transaction Supplement - Create Transaction Supplement
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement
- Logical: Transaction Supplement - Get Transaction Supplement v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| changedBy | string |  |
| changeDate | dateTime |  |
| reason | string |  |
