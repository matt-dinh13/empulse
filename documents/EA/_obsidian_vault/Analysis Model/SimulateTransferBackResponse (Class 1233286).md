---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/TransferBackInstallmentPlan"
domain: "Analysis Model"
element_id: 1233286
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SimulateTransferBackResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/TransferBackInstallmentPlan

## 🔗 Connections (2)

- → Dependency: [[TransferBackInstallmentPlanResultCodeDto]]
- ← Dependency: [[InstalmentPlanWS (Interface 1283947)]]

## 📊 Appears In (1 diagrams)

- Logical: TransferBackInstallmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transferBackAmount | MoneyDto |  |
| transferBackFee | MoneyDto |  |
| resultCode | TransferBackInstallmentPlanResultCodeDto |  |
| errorMessage | string |  |
