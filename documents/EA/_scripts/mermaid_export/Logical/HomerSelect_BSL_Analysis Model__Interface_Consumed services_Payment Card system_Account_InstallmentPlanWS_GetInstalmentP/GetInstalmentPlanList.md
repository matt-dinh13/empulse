# GetInstalmentPlanList

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/GetInstalmentPlanList
- **Diagram ID**: 66763
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
    GetInstallmentPlanListResponse ..> InstallmentPlanOverviewDto : unnamed
    InstalmentPlanWS ..> GetInstallmentPlanListRequest : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    InstalmentPlanWS ..> GetInstallmentPlanListResponse : unnamed
    InstalmentPlanWS ..> n_12_620_Show_installment_plan_for_REL : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackCalculationMethodDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> TransferBackDayTypeDto : unnamed
    InstallmentPlanTransferBackSettingsDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanTransferBackSettingsDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanOriginalTransactionDto : unnamed
    InstalmentPlanTransferBackDto ..> InstallmentPlanTransferBackReasonDto : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanTransferBackDto : unnamed
    InstallmentPlanOverviewDto ..> InstalmentPlanType : unnamed
    InstallmentPlanFinancialParametersDto <|-- InstallmentPlanOverviewDto : unnamed
    InstallmentPlanOverviewDto ..> InstallmentPlanStatusDto : unnamed
```
