# CancelInstalmentPlan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CancelInstalmentPlan
- **Diagram ID**: 99841
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CancelInstallmentPlanResultCodeDto["CancelInstallmentPlanResultCodeDto"]
    class n_12_624_Cancel_installment_plan["12.624 Cancel installment plan"]
    class CancelInstallmentPlanResponse["CancelInstallmentPlanResponse"]
    class CancelInstallmentPlanRequest["CancelInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstalmentPlanWS ..> CancelInstallmentPlanResponse : unnamed
    InstalmentPlanWS ..> CancelInstallmentPlanRequest : unnamed
    InstalmentPlanWS ..> n_12_624_Cancel_installment_plan : unnamed
    CancelInstallmentPlanResponse ..> CancelInstallmentPlanResultCodeDto : unnamed
```
