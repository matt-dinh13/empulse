# OfferDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator
- **Diagram ID**: 164375
- **Elements**: 11
- **Connectors**: 12

```mermaid
classDiagram
    class ADD_DiscountDto["{ADD}DiscountDto"]
    class MOD_PresentedInterestRateDto["{MOD}PresentedInterestRateDto"]
    class RelipVariantInstallmentDto["RelipVariantInstallmentDto"]
    class RelipVariantDto["RelipVariantDto"]
    class RewardTariffItemDto["RewardTariffItemDto"]
    class OfferTariffItemDto["OfferTariffItemDto"]
    class SubventionDto["SubventionDto"]
    class OfferServiceDto["OfferServiceDto"]
    class OfferInstallmentDto["OfferInstallmentDto"]
    class installmentPlanDto["installmentPlanDto"]
    class MOD_OfferDto["{MOD}OfferDto"]
    MOD_OfferDto ..> installmentPlanDto : unnamed
    installmentPlanDto ..> OfferInstallmentDto : unnamed
    MOD_OfferDto ..> OfferServiceDto : unnamed
    OfferServiceDto ..> SubventionDto : unnamed
    MOD_OfferDto ..> SubventionDto : unnamed
    OfferServiceDto ..> OfferTariffItemDto : unnamed
    MOD_OfferDto ..> OfferTariffItemDto : unnamed
    OfferServiceDto ..> RewardTariffItemDto : unnamed
    OfferServiceDto ..> RelipVariantDto : unnamed
    RelipVariantDto ..> RelipVariantInstallmentDto : unnamed
    MOD_OfferDto ..> MOD_PresentedInterestRateDto : unnamed
    MOD_OfferDto ..> ADD_DiscountDto : unnamed
```
