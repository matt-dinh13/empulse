---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1289154
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanBalancesDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan

## 🔗 Connections (1)

- ← Dependency: [[GetInstallmentPlanResponse (Class 1233285)]]

## 📊 Appears In (1 diagrams)

- Logical: GetInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ledgerBalance | MoneyDto |  |
| actualBalance | MoneyDto |  |
| principalDebtTotal | MoneyDto |  |
| principalDebtAct | MoneyDto |  |
| principalRemaining | MoneyDto |  |
| interestDebtTotal | MoneyDto |  |
| interestDebtAct | MoneyDto |  |
| interestRemaining | MoneyDto |  |
