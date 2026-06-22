# GetCommodityDataForUpdate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityDataForUpdate
- **Diagram ID**: 150905
- **Elements**: 15
- **Connectors**: 15

```mermaid
classDiagram
    class DEL_CommodityFieldSetting["{DEL}CommodityFieldSetting"]
    class DEL_CommodityDataEnabledForUpdate["{DEL}CommodityDataEnabledForUpdate"]
    class MoneyType["MoneyType"]
    class DEL_CommodityDataValues["{DEL}CommodityDataValues"]
    class DEL_CommodityUpdateMode["{DEL}CommodityUpdateMode"]
    class DEL_GetCommodityDataForUpdate["{DEL}GetCommodityDataForUpdate"]
    class DEL_ResultDataForUpdate["{DEL}ResultDataForUpdate"]
    class UseCase_Model_DEL_Manage_commodity_data_from_external_system["UseCase Model :{DEL}Manage commodity data from external systems"]
    class DEL_01_691_Provide_commodity_data_for_update_from_external_s["{DEL}01.691 Provide commodity data for update from external systems"]
    class DEL_ResultCodeForUpdate["{DEL}ResultCodeForUpdate"]
    class DEL_GetCommodityDataForUpdateResult["{DEL}GetCommodityDataForUpdateResult"]
    class DEL_GetCommodityDataForUpdateResponse["{DEL}GetCommodityDataForUpdateResponse"]
    class DEL_GetCommodityDataForUpdateRequest["{DEL}GetCommodityDataForUpdateRequest"]
    class Commodity_CommodityWS["Commodity : CommodityWS"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    DEL_ResultDataForUpdate ..> DEL_GetCommodityDataForUpdateResult : unnamed
    DEL_GetCommodityDataForUpdateResult ..> DEL_ResultCodeForUpdate : unnamed
    DEL_GetCommodityDataForUpdateResponse ..> DEL_ResultDataForUpdate : unnamed
    DEL_GetCommodityDataForUpdateRequest ..> DEL_GetCommodityDataForUpdate : unnamed
    DEL_GetCommodityDataForUpdate ..> DEL_CommodityUpdateMode : unnamed
    DEL_ResultDataForUpdate ..> DEL_CommodityDataValues : unnamed
    DEL_ResultDataForUpdate ..> DEL_CommodityDataEnabledForUpdate : unnamed
    DEL_ResultDataForUpdate ..> DEL_CommodityFieldSetting : unnamed
    DEL_CommodityWS --> Commodity_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityDataForUpdateRequest : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityDataForUpdateResponse : unnamed
    DEL_01_691_Provide_commodity_data_for_update_from_external_s <|.. DEL_CommodityWS : unnamed
    DEL_CommodityDataValues ..> MoneyType : unnamed
    DEL_CommodityDataValues ..> MoneyType : unnamed
    DEL_01_691_Provide_commodity_data_for_update_from_external_s --> UseCase_Model_DEL_Manage_commodity_data_from_external_system : unnamed
```
