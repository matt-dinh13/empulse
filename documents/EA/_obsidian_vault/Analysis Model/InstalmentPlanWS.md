---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1243721
diagrams: 9
connections: 29
tags:
  - interface
  - analysis-model
---

# 🔶 InstalmentPlanWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (29)

- → Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- → Association: [[GetInstallmentPlanResponse]]
- → Dependency: [[CalculateInstallmentPlanResponse]]
- → Dependency: [[{MOD}05.350 Process disbursement confirmation message]]
- → Abstraction «trace»: [[Request to charge off]]
- → Dependency: [[CreateInstallmentPlanRequest]]
- → Dependency: [[CalculateInstallmentPlanWithoutAccountRequest]]
- → Dependency: [[01.184 Process ContractSignTransactionsSE event (UseCase 1878522)]]
- → Dependency: [[DoCoolingOffInstallmentPlanResponse]]
- → Dependency: [[CalculateInstallmentPlanRequest (Class 1758507)]]
- → Dependency: [[12.620 Show installment plan for REL (UseCase 1575225)]]
- → Dependency: [[CreateInstallmentPlanResponse]]
- → Dependency: [[TransferBackInstallmentPlanRequest]]
- → Dependency: [[12.624 Cancel installment plan (UseCase 1575227)]]
- → Dependency: [[12.622 Transfer installment plan back request (UseCase 1575219)]]
- → Dependency: [[SimulateTransferBackRequest]]
- → Dependency: [[GetInstallmentPlanListResponse]]
- → Abstraction «trace»: [[IP calculator]]
- → Dependency: [[12.620 Show installment plan for REL (UseCase 1575225)]]
- → Dependency: [[CalculateInstallmentPlanWithoutAccountResponse]]
- → Dependency: [[12.626 Cancel installment plan in cooling-off period (UseCase 1575228)]]
- → Association: [[GetInstallmentPlanRequest]]
- → Dependency: [[12.622 Transfer installment plan back request (UseCase 1575219)]]
- → Dependency: [[SimulateTransferBackResponse]]
- → Dependency: [[TransferBackInstallmentPlanResponse]]
- → Dependency: [[CancelInstallmentPlanRequest]]
- → Dependency: [[GetInstallmentPlanListRequest]]
- → Dependency: [[CancelInstallmentPlanResponse]]
- → Dependency: [[DoCoolingOffInstallmentPlanRequest]]

## 📊 Appears In (9 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount
- Logical: CalculateInstalmentPlan
- Logical: CancelInstalmentPlan
- Logical: CreateInstalmentPlan
- Logical: DoCoolingOffInstalmentPlan
- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList
- Logical: InstallmentPlanWS
- Logical: TransferBackInstallmentPlan
