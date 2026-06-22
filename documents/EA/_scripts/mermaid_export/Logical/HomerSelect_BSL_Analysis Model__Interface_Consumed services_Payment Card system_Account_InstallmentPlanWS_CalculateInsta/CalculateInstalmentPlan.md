# CalculateInstalmentPlan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan
- **Diagram ID**: 152255
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
    class CalculateInstallmentPlanResponse["CalculateInstallmentPlanResponse"]
    class CalculateInstallmentPlanRequest["CalculateInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    InstalmentPlanWS ..> CalculateInstallmentPlanRequest : unnamed
    InstalmentPlanWS ..> CalculateInstallmentPlanResponse : unnamed
    CalculateInstallmentPlanRequest ..> InstallmentPlanCalculationDetailsDto : unnamed
    CalculateInstallmentPlanResponse ..> CreateInstallmentPlanResultCodeDto : unnamed
    CalculateInstallmentPlanResponse ..> InstallmentPlanFinancialParametersDto : unnamed
    CalculateInstallmentPlanResponse ..> InstallmentPlanInstallmentListDto : unnamed
    CalculateInstallmentPlanResponse ..> TransactionTypeVariantTypeDto : unnamed
    InstallmentPlanInstallmentListDto ..> InstallmentPlanInstallmentDto : unnamed
    InstallmentPlanOriginationDetailsBaseDto <|-- InstallmentPlanCalculationDetailsDto : unnamed
```
