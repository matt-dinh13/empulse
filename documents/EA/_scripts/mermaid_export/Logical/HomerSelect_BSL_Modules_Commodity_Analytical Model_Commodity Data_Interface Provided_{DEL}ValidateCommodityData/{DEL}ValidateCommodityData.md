# {DEL}ValidateCommodityData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ValidateCommodityData
- **Diagram ID**: 150903
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class DEL_CommodityEventType["{DEL}CommodityEventType"]
    class DEL_CommodityDataValidationParameters["{DEL}CommodityDataValidationParameters"]
    class DEL_ValidateCommodityData["{DEL}ValidateCommodityData"]
    class DEL_ValidateCommodityDataResponse["{DEL}ValidateCommodityDataResponse"]
    class UseCase_Model_DEL_Manage_commodity_data_from_external_system["UseCase Model :{DEL}Manage commodity data from external systems"]
    class DEL_01_693_Validate_commodity_data_from_external_systems["{DEL}01.693 Validate commodity data from external systems"]
    class Commodity_CommodityWS["Commodity : CommodityWS"]
    class DEL_ValidateCommodityDataRequest["{DEL}ValidateCommodityDataRequest"]
    class DEL_ResultCodeValidate["{DEL}ResultCodeValidate"]
    class DEL_ResultDataValidate["{DEL}ResultDataValidate"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    DEL_ValidateCommodityDataResponse ..> DEL_ResultDataValidate : unnamed
    DEL_ResultDataValidate ..> DEL_ResultCodeValidate : unnamed
    UseCase_Model_DEL_Manage_commodity_data_from_external_system --> DEL_01_693_Validate_commodity_data_from_external_systems : unnamed
    DEL_ValidateCommodityDataRequest ..> DEL_ValidateCommodityData : unnamed
    DEL_ValidateCommodityData ..> DEL_CommodityDataValidationParameters : unnamed
    Commodity_CommodityWS --> DEL_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_ValidateCommodityDataRequest : unnamed
    DEL_01_693_Validate_commodity_data_from_external_systems <|.. DEL_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_ValidateCommodityDataResponse : unnamed
    DEL_CommodityDataValidationParameters ..> DEL_CommodityEventType : unnamed
```
