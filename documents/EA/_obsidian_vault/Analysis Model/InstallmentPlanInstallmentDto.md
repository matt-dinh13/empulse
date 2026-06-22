---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1289159
diagrams: 3
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanInstallmentDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan

## 🔗 Connections (13)

- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- ← Dependency: [[InstallmentPlanInstallmentListDto]]
- → Dependency: [[InstallmentStatusDto]]

## 📊 Appears In (3 diagrams)

- Logical: CalculateInstalmentPlan
- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlan - Mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentNumber | int |  |
| principalAmount | MoneyDto |  |
| interestAmount | MoneyDto |  |
| prescribeDate | date |  |
| dueDate | date |  |
| status | InstallmentStatusDto |  |
| paidDate | date |  |
| paidAmount | MoneyDto |  |
| principalBalance | MoneyDto |  |
| interestPeriodStart | date |  |
| interestPeriodEnd | date |  |
| interestPeriodDuration | int |  |
| totalAmount | MoneyDto |  |
| feeAmount | MoneyDto |  |
