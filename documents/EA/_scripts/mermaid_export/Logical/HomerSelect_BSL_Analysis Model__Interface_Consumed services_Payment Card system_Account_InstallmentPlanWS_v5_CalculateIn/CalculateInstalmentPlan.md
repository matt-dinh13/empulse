# CalculateInstalmentPlan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan
- **Diagram ID**: 122498
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class TransactionTypeVariantTypeDto["TransactionTypeVariantTypeDto"]
    class CreateInstallmentPlanResultCodeDto["CreateInstallmentPlanResultCodeDto"]
    class InstallmentPlanFinancialParametersDto["InstallmentPlanFinancialParametersDto"]
    class InstallmentPlanOriginationDetailsBaseDto["InstallmentPlanOriginationDetailsBaseDto"]
    class InstallmentPlanCalculationDetailsDto["InstallmentPlanCalculationDetailsDto"]
    class InstallmentPlanInstallmentDto["InstallmentPlanInstallmentDto"]
    class InstallmentPlanInstallmentListDto["InstallmentPlanInstallmentListDto"]
    class MOD_CalculateInstallmentPlanResponse["{MOD}CalculateInstallmentPlanResponse"]
    class CalculateInstallmentPlanRequest["CalculateInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstalmentPlanWS ..> CalculateInstallmentPlanRequest : unnamed
    InstalmentPlanWS ..> MOD_CalculateInstallmentPlanResponse : unnamed
    CalculateInstallmentPlanRequest ..> InstallmentPlanCalculationDetailsDto : unnamed
    MOD_CalculateInstallmentPlanResponse ..> TransactionTypeVariantTypeDto : unnamed
    MOD_CalculateInstallmentPlanResponse ..> InstallmentPlanFinancialParametersDto : unnamed
    MOD_CalculateInstallmentPlanResponse ..> InstallmentPlanInstallmentListDto : unnamed
    MOD_CalculateInstallmentPlanResponse ..> CreateInstallmentPlanResultCodeDto : unnamed
    InstallmentPlanInstallmentListDto ..> InstallmentPlanInstallmentDto : unnamed
    InstallmentPlanOriginationDetailsBaseDto <|-- InstallmentPlanCalculationDetailsDto : unnamed
```
