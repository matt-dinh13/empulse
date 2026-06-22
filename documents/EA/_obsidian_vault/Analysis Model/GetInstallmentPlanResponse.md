---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 870877
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetInstallmentPlanResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan

## 🔗 Connections (4)

- → Dependency: [[InstallmentPlanInstallmentListDto (Class 1466621)]]
- → Dependency: [[InstallmentPlanBalancesDto (Class 1466630)]]
- → Dependency: [[InstallmentPlanOverviewDto (Class 1466638)]]
- ← Association: [[InstalmentPlanWS]]

## 📊 Appears In (1 diagrams)

- Logical: GetInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanOverview | InstallmentPlanOverviewDto |  |
| balances | InstallmentPlanBalancesDto |  |
| installmentsList | InstallmentPlanInstallmentListDto |  |
