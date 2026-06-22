---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1758508
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CalculateInstallmentPlanResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan

## 🔗 Connections (5)

- ← Dependency: [[InstalmentPlanWS]]
- → Dependency: [[TransactionTypeVariantTypeDto (Class 1466629)]]
- → Dependency: [[InstallmentPlanInstallmentListDto (Class 1466621)]]
- → Dependency: [[InstallmentPlanFinancialParametersDto (Class 1466633)]]
- → Dependency: [[CreateInstallmentPlanResultCodeDto (Enumeration 1466631)]]

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
