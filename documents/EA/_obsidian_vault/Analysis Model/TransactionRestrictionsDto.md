---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3"
domain: "Analysis Model"
element_id: 1495051
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 TransactionRestrictionsDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3

## 🔗 Connections (3)

- → Dependency: [[MoneyDto (Class 1495052)]]
- → Dependency: [[MoneyDto (Class 1495052)]]
- ← Dependency: [[InstalmentPlanSetupDto]]

## 📊 Appears In (1 diagrams)

- Logical: Get instalmentPlanOffersV3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| maxTransactionAmount | MoneyDto |  |
| minTransactionAmount | MoneyDto |  |
| transactionDateFrom | date |  |
| transactionDateTo | date |  |
| transactionType | string |  |
