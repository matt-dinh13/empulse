---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1466622
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanTransferBackSettingsDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan

## 🔗 Connections (4)

- ← Dependency: [[InstallmentPlanOverviewDto (Class 1466638)]]
- → Dependency: [[InstallmentPlanTransferBackReasonDto (Enumeration 1466626)]]
- → Dependency: [[TransferBackDayTypeDto (Enumeration 1466637)]]
- → Dependency: [[TransferBackCalculationMethodDto (Enumeration 1466634)]]

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
