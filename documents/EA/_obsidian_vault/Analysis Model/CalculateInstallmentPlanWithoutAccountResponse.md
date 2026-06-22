---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1243733
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CalculateInstallmentPlanWithoutAccountResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (3)

- ← Dependency: [[InstalmentPlanWS]]
- → Dependency: [[InstallmentPlanFinancialParametersDto (Class 1466633)]]
- → Dependency: [[InstallmentPlanInstallmentListDto (Class 1466621)]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financialParameters | InstallmentPlanFinancialParametersDto |  |
| installmentsList | InstallmentPlanInstallmentListDto |  |
| resultCode | CreateInstallmentPlanResultCodeDto |  |
| errorMessage | string |  |
| offerCode | TransactionTypeVariantTypeDto |  |
