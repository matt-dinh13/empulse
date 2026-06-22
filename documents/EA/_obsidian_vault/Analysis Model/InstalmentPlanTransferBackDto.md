---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1289151
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentPlanTransferBackDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan

## 🔗 Connections (2)

- ← Dependency: [[InstallmentPlanOverviewDto]]
- → Dependency: [[InstallmentPlanTransferBackReasonDto]]

## 📊 Appears In (2 diagrams)

- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transferBackReason | InstallmentPlanTransferBackReasonDto |  |
| transferBackDate | date |  |
| transferBackAmount | MoneyDto |  |
