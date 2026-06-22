---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1466621
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanInstallmentListDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (4)

- ← Dependency: [[GetInstallmentPlanResponse]]
- ← Dependency: [[CalculateInstallmentPlanWithoutAccountResponse]]
- → Dependency: [[InstallmentPlanInstallmentDto (Class 1466620)]]
- ← Dependency: [[CalculateInstallmentPlanResponse]]

## 📊 Appears In (3 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount
- Logical: CalculateInstalmentPlan
- Logical: GetInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installments | InstallmentPlanInstallmentDto |  |
