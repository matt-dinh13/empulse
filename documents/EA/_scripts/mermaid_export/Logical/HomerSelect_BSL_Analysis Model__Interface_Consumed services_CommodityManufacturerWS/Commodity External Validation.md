# Commodity External Validation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CommodityManufacturerWS
- **Diagram ID**: 163984
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class MOD_POST_Commodity_Validation["{MOD}POST Commodity Validation"]
    class UseCase_Model_Manage_contract_commodities["UseCase Model :Manage contract commodities"]
    class ValidateCommodity_External_Commodity_validation_mapping["ValidateCommodity :External Commodity validation mapping"]
    class MOD_ValidateCommodityResponse["{MOD}ValidateCommodityResponse"]
    class MOD_ValidateCommodityRequest["{MOD}ValidateCommodityRequest"]
    class MOD_CommodityManufacturerWS["{MOD}CommodityManufacturerWS"]
    MOD_CommodityManufacturerWS ..> MOD_ValidateCommodityRequest : unnamed
    MOD_CommodityManufacturerWS ..> MOD_ValidateCommodityResponse : unnamed
    MOD_POST_Commodity_Validation <|.. MOD_CommodityManufacturerWS : unnamed
```
