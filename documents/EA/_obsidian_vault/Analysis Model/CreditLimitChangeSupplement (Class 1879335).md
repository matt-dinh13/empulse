---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3"
domain: "Analysis Model"
element_id: 1879335
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3

## 🔗 Connections (3)

- → Usage: [[ScoringAdditionalData (Class 1879337)]]
- → Usage: [[CreditLimitChangeType]]
- → Generalization: [[SupplementTypeSpecificData (Class 1879330)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Supplement Notifications v3
- Logical: CreditLimitChangeSupplements - Get supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | CreditLimitChangeType |  |
| offerId | string |  |
| currentCreditLimit | Money |  |
| previousCreditLimit | Money |  |
| {ADD}approvalResults | ScoringAdditionalData |  |
