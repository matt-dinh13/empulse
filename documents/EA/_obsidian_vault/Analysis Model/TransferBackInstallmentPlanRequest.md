---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/TransferBackInstallmentPlan"
domain: "Analysis Model"
element_id: 862734
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TransferBackInstallmentPlanRequest

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/TransferBackInstallmentPlan

## 🔗 Connections (2)

- → Dependency: [[InstallmentPlanTransferBackReasonDto (Enumeration 1466626)]]
- ← Dependency: [[InstalmentPlanWS]]

## 📊 Appears In (1 diagrams)

- Logical: TransferBackInstallmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanID | CodeType |  |
| transferBackReason | InstallmentPlanTransferBackReasonDto |  |
| transferBackDate | date |  |
