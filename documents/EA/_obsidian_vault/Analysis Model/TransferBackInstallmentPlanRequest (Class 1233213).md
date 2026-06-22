---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/TransferBackInstallmentPlan"
domain: "Analysis Model"
element_id: 1233213
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TransferBackInstallmentPlanRequest

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/TransferBackInstallmentPlan

## 🔗 Connections (2)

- → Dependency: [[InstallmentPlanTransferBackReasonDto]]
- ← Dependency: [[InstalmentPlanWS (Interface 1283947)]]

## 📊 Appears In (1 diagrams)

- Logical: TransferBackInstallmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanID | CodeType |  |
| transferBackReason | InstallmentPlanTransferBackReasonDto |  |
| transferBackDate | date |  |
