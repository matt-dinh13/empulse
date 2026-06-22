# GetInstalmentPlanList

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/GetInstalmentPlanList
- **Diagram ID**: 99840
- **Elements**: 14
- **Connectors**: 15

```mermaid
classDiagram
    class InstallmentPlanFinancialParametersDto["InstallmentPlanFinancialParametersDto"]
    class InstallmentPlanTransferBackReasonDto["InstallmentPlanTransferBackReasonDto"]
    class TransferBackDayTypeDto["TransferBackDayTypeDto"]
    class TransferBackCalculationMethodDto["TransferBackCalculationMethodDto"]
    class InstalmentPlanType["InstalmentPlanType"]
    class InstallmentPlanOriginalTransactionDto["InstallmentPlanOriginalTransactionDto"]
    class n_12_620_Show_installment_plan_for_REL["12.620 Show installment plan for REL"]
    class InstallmentPlanTransferBackSettingsDto["InstallmentPlanTransferBackSettingsDto"]
    class InstalmentPlanTransferBackDto["InstalmentPlanTransferBackDto"]
    class InstallmentPlanOverviewDto["InstallmentPlanOverviewDto"]
    class InstallmentPlanStatusDto["InstallmentPlanStatusDto"]
    class GetInstallmentPlanListResponse["GetInstallmentPlanListResponse"]
    class GetInstallmentPlanListRequest["GetInstallmentPlanListRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstalmentPlanWS ..> GetInstallmentPlanListRequest : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    GetInstallmentPlanListResponse ..> InstallmentPlanOverviewDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanTransferBackSettingsDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanOriginalTransactionDto : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanTransferBackDto : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanType : unnamed
    InstallmentPlanFinancialParametersDto <|-- InstallmentPlanOverviewDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanStatusDto : unnamed
    InstalmentPlanTransferBackDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackCalculationMethodDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackDayTypeDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstalmentPlanWS ..> GetInstallmentPlanListResponse : unnamed
```
