# CalculateInstallmentPlanWithoutAccount

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount
- **Diagram ID**: 101232
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class InstallmentPlanFinancialParametersDto["InstallmentPlanFinancialParametersDto"]
    class InstallmentPlanOriginationDetailsBaseDto["InstallmentPlanOriginationDetailsBaseDto"]
    class InstallmentPlanCalculationWithoutAccountDetailsDto["InstallmentPlanCalculationWithoutAccountDetailsDto"]
    class InstallmentPlanInstallmentDto["InstallmentPlanInstallmentDto"]
    class InstallmentPlanInstallmentListDto["InstallmentPlanInstallmentListDto"]
    class CalculateInstallmentPlanWithoutAccountResponse["CalculateInstallmentPlanWithoutAccountResponse"]
    class CalculateInstallmentPlanWithoutAccountRequest["CalculateInstallmentPlanWithoutAccountRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    CalculateInstallmentPlanWithoutAccountResponse ..> InstallmentPlanFinancialParametersDto : unnamed
    CalculateInstallmentPlanWithoutAccountRequest ..> InstallmentPlanCalculationWithoutAccountDetailsDto : unnamed
    InstalmentPlanWS ..> CalculateInstallmentPlanWithoutAccountRequest : unnamed
    InstalmentPlanWS ..> CalculateInstallmentPlanWithoutAccountResponse : unnamed
    CalculateInstallmentPlanWithoutAccountResponse ..> InstallmentPlanInstallmentListDto : unnamed
    InstallmentPlanCalculationWithoutAccountDetailsDto <|-- InstallmentPlanOriginationDetailsBaseDto : unnamed
    InstallmentPlanInstallmentListDto ..> InstallmentPlanInstallmentDto : unnamed
```
