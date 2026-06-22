---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1289162
diagrams: 2
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanOverviewDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan

## 🔗 Connections (19)

- ← Dependency: [[GetInstallmentPlanListResponse (Class 1233288)]]
- ← Dependency: [[GetInstallmentPlanResponse (Class 1233285)]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Generalization «XSDextension»: [[InstallmentPlanFinancialParametersDto]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[InstallmentPlanStatusDto]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[InstallmentPlanTransferBackSettingsDto]]
- → Dependency: [[InstalmentPlanTransferBackDto]]
- → Dependency: [[InstallmentPlanOriginalTransactionDto]]
- → Dependency: [[InstalmentPlanType]]

## 📊 Appears In (2 diagrams)

- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| coolingOffPeriodEndDate | date |  |
| creationDate | date |  |
| installmentPlanID | CodeType |  |
| installmentPlanType | InstalmentPlanTypeDto |  |
| lastInstallmentAmount | MoneyDto |  |
| originalTransaction | InstallmentPlanOriginalTransactionDto |  |
| remainingInstallments | int |  |
| remainingPrincipalAmount | MoneyDto |  |
| status | InstallmentPlanStatusDto |  |
| statusChangeDate | date |  |
| transferBack | InstallmentPlanTransferBackDto |  |
| transferBackSettings | InstallmentPlanTransferBackSettingsDto |  |
