# OfferCalculationRequest

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator
- **Diagram ID**: 164372
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_Structured_Parameter_Types["{MOD}Structured Parameter Types"]
    class structuredParameterAttributesDto["structuredParameterAttributesDto"]
    class structuredParametersDto["structuredParametersDto"]
    class QualificationCriteriaDto["QualificationCriteriaDto"]
    class FirstDueDateParamsDto["FirstDueDateParamsDto"]
    class CommodityDto["CommodityDto"]
    class ClientDto["ClientDto"]
    class OfferCalculationRequestDto["OfferCalculationRequestDto"]
    OfferCalculationRequestDto ..> ClientDto : unnamed
    OfferCalculationRequestDto ..> CommodityDto : unnamed
    OfferCalculationRequestDto ..> FirstDueDateParamsDto : unnamed
    OfferCalculationRequestDto ..> QualificationCriteriaDto : unnamed
    OfferCalculationRequestDto ..> structuredParametersDto : unnamed
    structuredParametersDto ..> structuredParameterAttributesDto : unnamed
    structuredParametersDto ..> MOD_Structured_Parameter_Types : optionaly from
```
