---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications"
domain: "Analysis Model"
element_id: 1862988
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications

## 🔗 Connections (2)

- → Generalization: [[SupplementTypeSpecificData]]
- → Usage: [[CreditLimitChangeType]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | CreditLimitChangeType |  |
| offerId | string |  |
| currentCreditLimit | Money |  |
| previousCreditLimit | Money |  |
