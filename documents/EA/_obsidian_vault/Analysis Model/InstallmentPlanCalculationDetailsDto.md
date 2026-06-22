---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1289155
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanCalculationDetailsDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[InstallmentPlanOriginationDetailsBaseDto]]
- ← Dependency: [[CalculateInstallmentPlanRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transferAmount | MoneyDto |  |
| transactionType | TransactionTypeDto |  |
