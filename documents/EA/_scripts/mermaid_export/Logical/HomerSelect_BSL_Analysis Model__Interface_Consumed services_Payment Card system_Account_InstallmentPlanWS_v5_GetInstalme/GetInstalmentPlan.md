# GetInstalmentPlan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlan
- **Diagram ID**: 99838
- **Elements**: 18
- **Connectors**: 19

```mermaid
classDiagram
    class InstallmentStatusDto["InstallmentStatusDto"]
    class InstallmentPlanFinancialParametersDto["InstallmentPlanFinancialParametersDto"]
    class InstallmentPlanOriginalTransactionDto["InstallmentPlanOriginalTransactionDto"]
    class InstallmentPlanStatusDto["InstallmentPlanStatusDto"]
    class n_12_620_Show_installment_plan_for_REL["12.620 Show installment plan for REL"]
    class InstallmentPlanTransferBackReasonDto["InstallmentPlanTransferBackReasonDto"]
    class TransferBackDayTypeDto["TransferBackDayTypeDto"]
    class TransferBackCalculationMethodDto["TransferBackCalculationMethodDto"]
    class InstallmentPlanTransferBackSettingsDto["InstallmentPlanTransferBackSettingsDto"]
    class InstalmentPlanTransferBackDto["InstalmentPlanTransferBackDto"]
    class InstalmentPlanType["InstalmentPlanType"]
    class InstallmentPlanOverviewDto["InstallmentPlanOverviewDto"]
    class InstallmentPlanBalancesDto["InstallmentPlanBalancesDto"]
    class InstallmentPlanInstallmentDto["InstallmentPlanInstallmentDto"]
    class InstallmentPlanInstallmentListDto["InstallmentPlanInstallmentListDto"]
    class GetInstallmentPlanResponse["GetInstallmentPlanResponse"]
    class GetInstallmentPlanRequest["GetInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstallmentPlanInstallmentDto ..> InstallmentStatusDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackDayTypeDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackCalculationMethodDto : unnamed
    InstalmentPlanTransferBackDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanStatusDto : unnamed
    InstallmentPlanFinancialParametersDto <|-- InstallmentPlanOverviewDto : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanType : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanTransferBackDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanTransferBackSettingsDto : unnamed
    InstalmentPlanWS --> GetInstallmentPlanRequest : unnamed
    InstallmentPlanInstallmentListDto ..> InstallmentPlanInstallmentDto : unnamed
    GetInstallmentPlanResponse ..> InstallmentPlanOverviewDto : unnamed
    GetInstallmentPlanResponse ..> InstallmentPlanBalancesDto : unnamed
    GetInstallmentPlanResponse ..> InstallmentPlanInstallmentListDto : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanOriginalTransactionDto : unnamed
    InstalmentPlanWS --> GetInstallmentPlanResponse : unnamed
```
