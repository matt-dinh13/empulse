# Commodity Validation Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Validation Data
- **Diagram ID**: 138996
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class ValidationDataValidationRule["ValidationDataValidationRule"]
    class CommodityValidationData["CommodityValidationData"]
    class ValidationError["ValidationError"]
    class validationDataResult["validationDataResult"]
    class CommodityValidationDataParameters["CommodityValidationDataParameters"]
    class comodities_validation_data["comodities-validation-data"]
    class Commodity_API_Commodity_REST_API["Commodity API :Commodity REST API"]
    class Commodity_API["Commodity API"]
    comodities_validation_data ..> CommodityValidationDataParameters : unnamed
    comodities_validation_data ..> validationDataResult : unnamed
    validationDataResult ..> ValidationError : unnamed
    validationDataResult ..> CommodityValidationData : unnamed
    CommodityValidationData ..> ValidationDataValidationRule : unnamed
    Commodity_API ..> comodities_validation_data : /commodites-validation-data
```
