# PCG-5109 - Samsung - Updated API for IMEI validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5109 - SAMSUNG - Updated API - IMEI validation (CBL-27815)
- **Diagram ID**: 160910
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph TD
    el_1844340["Note"]
    el_1844086["Note"]
    Commodity_Validation_algorithm["Commodity Validation algorithm"]
    el_1844085["Note"]
    el_1844087["Note"]
    MOD_ValidateCommodityRequest["{MOD}ValidateCommodityRequest"]
    ValidationParametersDto["ValidationParametersDto"]
    Commodity_commodities_validation["Commodity : commodities-validation"]
    ValidateCommodity_External_Commodity_validation_mapping["ValidateCommodity : External Commodity validation mapping"]
    Requirement_SAMSUNG_IMEI_validation["Requirement - SAMSUNG_IMEI validation"]
    Commodity_commodities_validation -->|unnamed| ValidationParametersDto
    el_1844085 -->|unnamed| ValidationParametersDto
    el_1844087 -->|unnamed| ValidationParametersDto
    el_1844086 -->|unnamed| ValidationParametersDto
    ValidateCommodity_External_Commodity_validation_mapping -->|unnamed| MOD_ValidateCommodityRequest
    el_1844086 -->|unnamed| MOD_ValidateCommodityRequest
    el_1844087 -->|unnamed| MOD_ValidateCommodityRequest
    Commodity_Validation_algorithm -->|unnamed| ValidationParametersDto
    MOD_ValidateCommodityRequest -->|unnamed| el_1844085
```
