---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1466624
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanCalculationDetailsDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[InstallmentPlanOriginationDetailsBaseDto (Class 1466619)]]
- ← Dependency: [[CalculateInstallmentPlanRequest (Class 1758507)]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transferAmount | MoneyDto |  |
| transactionType | TransactionTypeDto |  |
