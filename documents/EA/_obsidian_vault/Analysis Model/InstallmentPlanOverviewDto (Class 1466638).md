---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan"
domain: "Analysis Model"
element_id: 1466638
diagrams: 2
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanOverviewDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlan

## 🔗 Connections (19)

- ← Dependency: [[GetInstallmentPlanListResponse]]
- ← Dependency: [[GetInstallmentPlanResponse]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[List of installment plans]]
- → Dependency: [[InstallmentPlanStatusDto (Enumeration 1466636)]]
- → Generalization «XSDextension»: [[InstallmentPlanFinancialParametersDto (Class 1466633)]]
- → Dependency: [[InstalmentPlanType (Enumeration 1466632)]]
- → Dependency: [[InstalmentPlanTransferBackDto (Class 1466628)]]
- → Dependency: [[InstallmentPlanOriginalTransactionDto (Class 1466623)]]
- → Dependency: [[InstallmentPlanTransferBackSettingsDto (Class 1466622)]]

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
