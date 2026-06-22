# Get instalmentPlanOffersV3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3
- **Diagram ID**: 124937
- **Elements**: 9
- **Connectors**: 10

```mermaid
classDiagram
    class MoneyDto["MoneyDto"]
    class MOD_instalmentPlanOffers["{MOD}instalmentPlanOffers"]
    class IPCalculationParamsDto["IPCalculationParamsDto"]
    class TransactionRestrictionsDto["TransactionRestrictionsDto"]
    class InstalmentPlanSetupDto["InstalmentPlanSetupDto"]
    class InstalmentPlanOfferDto["InstalmentPlanOfferDto"]
    class OpenApiListResponseDtoInstalmentPlanOfferDto["OpenApiListResponseDtoInstalmentPlanOfferDto"]
    class InstalmentPlanOffersRequest["InstalmentPlanOffersRequest"]
    OpenApiListResponseDtoInstalmentPlanOfferDto ..> InstalmentPlanOfferDto : unnamed
    InstalmentPlanOfferDto ..> InstalmentPlanSetupDto : unnamed
    InstalmentPlanSetupDto ..> IPCalculationParamsDto : unnamed
    InstalmentPlanSetupDto ..> MoneyDto : unnamed
    InstalmentPlanSetupDto ..> MoneyDto : unnamed
    InstalmentPlanSetupDto ..> TransactionRestrictionsDto : unnamed
    TransactionRestrictionsDto ..> MoneyDto : unnamed
    TransactionRestrictionsDto ..> MoneyDto : unnamed
    MOD_instalmentPlanOffers ..> OpenApiListResponseDtoInstalmentPlanOfferDto : unnamed
    MOD_instalmentPlanOffers ..> InstalmentPlanOffersRequest : unnamed
```
