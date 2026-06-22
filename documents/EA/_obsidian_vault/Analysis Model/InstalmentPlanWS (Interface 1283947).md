---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1283947
diagrams: 8
connections: 27
tags:
  - interface
  - analysis-model
---

# 🔶 InstalmentPlanWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan

## 🔗 Connections (27)

- → Dependency: [[{MOD}CalculateInstallmentPlanResponse]]
- → Dependency: [[DoCoolingOffInstallmentPlanResponse (Class 1233299)]]
- → Dependency: [[TransferBackInstallmentPlanRequest (Class 1233213)]]
- → Dependency: [[GetInstallmentPlanListRequest (Class 1233211)]]
- → Dependency: [[{MOD}05.350 Process disbursement confirmation message]]
- → Dependency: [[12.626 Cancel installment plan in cooling-off period (UseCase 1575228)]]
- → Dependency: [[SimulateTransferBackRequest (Class 1233212)]]
- → Dependency: [[01.184 Process ContractSignTransactionsSE event (UseCase 1878522)]]
- → Dependency: [[12.622 Transfer installment plan back request (UseCase 1575219)]]
- → Dependency: [[GetInstallmentPlanListResponse (Class 1233288)]]
- → Association: [[GetInstallmentPlanRequest (Class 1233210)]]
- → Dependency: [[TransferBackInstallmentPlanResponse (Class 1233287)]]
- → Abstraction «trace»: [[IP calculator]]
- → Association: [[GetInstallmentPlanResponse (Class 1233285)]]
- → Dependency: [[DoCoolingOffInstallmentPlanRequest (Class 1233209)]]
- → Dependency: [[SimulateTransferBackResponse (Class 1233286)]]
- → Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- → Dependency: [[12.624 Cancel installment plan (UseCase 1575227)]]
- → Dependency: [[CreateInstallmentPlanRequest (Class 1233207)]]
- → Dependency: [[12.622 Transfer installment plan back request (UseCase 1575219)]]
- → Abstraction «trace»: [[Request to charge off]]
- → Dependency: [[CancelInstallmentPlanRequest (Class 1233205)]]
- → Dependency: [[12.620 Show installment plan for REL (UseCase 1575225)]]
- → Dependency: [[CreateInstallmentPlanResponse (Class 1233208)]]
- → Dependency: [[CancelInstallmentPlanResponse (Class 1233206)]]
- → Dependency: [[CalculateInstallmentPlanRequest]]
- → Dependency: [[12.620 Show installment plan for REL (UseCase 1575225)]]

## 📊 Appears In (8 diagrams)

- Logical: CalculateInstalmentPlan
- Logical: CancelInstalmentPlan
- Logical: CreateInstalmentPlan
- Logical: DoCoolingOffInstalmentPlan
- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList
- Logical: InstallmentPlanWS
- Logical: TransferBackInstallmentPlan
