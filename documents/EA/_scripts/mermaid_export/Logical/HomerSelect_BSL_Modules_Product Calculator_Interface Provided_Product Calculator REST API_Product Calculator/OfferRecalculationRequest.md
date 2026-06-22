# OfferRecalculationRequest

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator
- **Diagram ID**: 164373
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_Structured_Parameter_Types["{MOD}Structured Parameter Types"]
    class structuredParametersDto["structuredParametersDto"]
    class structuredParameterAttributesDto["structuredParameterAttributesDto"]
    class FirstDueDateParamsDto["FirstDueDateParamsDto"]
    class CommodityDto["CommodityDto"]
    class ClientDto["ClientDto"]
    class OriginalOfferDto["OriginalOfferDto"]
    class OfferRecalculationRequestDto["OfferRecalculationRequestDto"]
    OfferRecalculationRequestDto ..> OriginalOfferDto : unnamed
    OfferRecalculationRequestDto ..> ClientDto : unnamed
    OfferRecalculationRequestDto ..> CommodityDto : unnamed
    OfferRecalculationRequestDto ..> FirstDueDateParamsDto : unnamed
    structuredParametersDto ..> structuredParameterAttributesDto : unnamed
    OfferRecalculationRequestDto ..> structuredParametersDto : unnamed
    structuredParametersDto ..> MOD_Structured_Parameter_Types : optionaly from
```
