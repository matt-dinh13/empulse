---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1466620
diagrams: 4
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanInstallmentDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (13)

- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- ← Dependency: [[InstallmentPlanInstallmentListDto (Class 1466621)]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[InstallmentStatusDto (Enumeration 1466627)]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]
- → Dependency: [[Instalment plan detail]]

## 📊 Appears In (4 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount
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
