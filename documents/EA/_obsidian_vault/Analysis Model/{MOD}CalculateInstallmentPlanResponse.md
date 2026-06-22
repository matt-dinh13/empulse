---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1467958
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}CalculateInstallmentPlanResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan

## 🔗 Connections (5)

- ← Dependency: [[InstalmentPlanWS (Interface 1283947)]]
- → Dependency: [[TransactionTypeVariantTypeDto]]
- → Dependency: [[CreateInstallmentPlanResultCodeDto]]
- → Dependency: [[InstallmentPlanInstallmentListDto]]
- → Dependency: [[InstallmentPlanFinancialParametersDto]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CreateInstallmentPlanResultCodeDto |  |
| errorMessage | string |  |
| financialParameters | InstallmentPlanFinancialParametersDto |  |
| installmentsList | InstallmentPlanInstallmentListDto |  |
| offerCode | TransactionTypeVariantTypeDto |  |
