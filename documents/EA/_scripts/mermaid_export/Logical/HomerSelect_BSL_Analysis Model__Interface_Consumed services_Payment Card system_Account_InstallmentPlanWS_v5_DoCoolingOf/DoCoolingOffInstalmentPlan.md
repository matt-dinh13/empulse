# DoCoolingOffInstalmentPlan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/DoCoolingOffInstalmentPlan
- **Diagram ID**: 99837
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_12_626_Cancel_installment_plan_in_cooling_off_period["12.626 Cancel installment plan in cooling-off period"]
    class DoCoolingOffInstallmentPlanResponse["DoCoolingOffInstallmentPlanResponse"]
    class DoCoolingOffInstallmentPlanRequest["DoCoolingOffInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstalmentPlanWS ..> DoCoolingOffInstallmentPlanRequest : unnamed
    InstalmentPlanWS ..> n_12_626_Cancel_installment_plan_in_cooling_off_period : unnamed
    InstalmentPlanWS ..> DoCoolingOffInstallmentPlanResponse : unnamed
```
