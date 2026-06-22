---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1233285
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetInstallmentPlanResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan

## 🔗 Connections (4)

- → Dependency: [[InstallmentPlanInstallmentListDto]]
- → Dependency: [[InstallmentPlanBalancesDto]]
- → Dependency: [[InstallmentPlanOverviewDto]]
- ← Association: [[InstalmentPlanWS (Interface 1283947)]]

## 📊 Appears In (1 diagrams)

- Logical: GetInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanOverview | InstallmentPlanOverviewDto |  |
| balances | InstallmentPlanBalancesDto |  |
| installmentsList | InstallmentPlanInstallmentListDto |  |
