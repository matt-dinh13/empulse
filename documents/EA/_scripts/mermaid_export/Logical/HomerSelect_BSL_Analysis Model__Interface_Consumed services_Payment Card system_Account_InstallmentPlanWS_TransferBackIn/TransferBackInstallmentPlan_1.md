# TransferBackInstallmentPlan

```mermaid
classDiagram
    class TransferBackInstallmentPlanResultCodeDto["TransferBackInstallmentPlanResultCodeDto"]
    class TransferBackInstallmentPlanResponse["TransferBackInstallmentPlanResponse"]
    class TransferBackInstallmentPlanRequest["TransferBackInstallmentPlanRequest"]
    class n_12_622_Transfer_installment_plan_back_request["12.622 Transfer installment plan back request"]
    class InstallmentPlanTransferBackReasonDto["InstallmentPlanTransferBackReasonDto"]
    class SimulateTransferBackResponse["SimulateTransferBackResponse"]
    class SimulateTransferBackRequest["SimulateTransferBackRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    SimulateTransferBackResponse --> TransferBackInstallmentPlanResultCodeDto : unnamed
    TransferBackInstallmentPlanResponse --> TransferBackInstallmentPlanResultCodeDto : unnamed
    SimulateTransferBackRequest --> InstallmentPlanTransferBackReasonDto : unnamed
    TransferBackInstallmentPlanRequest --> InstallmentPlanTransferBackReasonDto : unnamed
    InstalmentPlanWS --> TransferBackInstallmentPlanResponse : unnamed
    InstalmentPlanWS --> SimulateTransferBackResponse : unnamed
    InstalmentPlanWS --> n_12_622_Transfer_installment_plan_back_request : unnamed
    InstalmentPlanWS --> SimulateTransferBackRequest : unnamed
    InstalmentPlanWS --> n_12_622_Transfer_installment_plan_back_request : unnamed
    InstalmentPlanWS --> TransferBackInstallmentPlanRequest : unnamed
```
