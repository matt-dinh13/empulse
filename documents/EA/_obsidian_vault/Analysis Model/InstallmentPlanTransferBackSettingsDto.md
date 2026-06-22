---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1289157
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanTransferBackSettingsDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan

## 🔗 Connections (4)

- ← Dependency: [[InstallmentPlanOverviewDto]]
- → Dependency: [[TransferBackDayTypeDto]]
- → Dependency: [[TransferBackCalculationMethodDto]]
- → Dependency: [[InstallmentPlanTransferBackReasonDto]]

## 📊 Appears In (2 diagrams)

- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transferBackReason | InstallmentPlanTransferBackReasonDto |  |
| calculationMethod | TransferBackCalculationMethodDto |  |
| allowedDay | TransferBackDayTypeDto |  |
| includeFutureInterest | boolean |  |
