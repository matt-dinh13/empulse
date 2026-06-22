---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CreateInstalmentPlan"
domain: "Analysis Model"
element_id: 1016050
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateInstallmentPlanResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CreateInstalmentPlan

## 🔗 Connections (2)

- → Dependency: [[CreateInstallmentPlanResultCodeDto (Enumeration 1466631)]]
- ← Dependency: [[InstalmentPlanWS]]

## 📊 Appears In (1 diagrams)

- Logical: CreateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanID | int |  |
| resultCode | CreateInstallmentPlanResultCodeDto |  |
| errorMessage | string |  |
