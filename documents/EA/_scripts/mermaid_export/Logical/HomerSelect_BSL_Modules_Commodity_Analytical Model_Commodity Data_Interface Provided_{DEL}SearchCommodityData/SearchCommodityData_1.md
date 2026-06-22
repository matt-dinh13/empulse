# SearchCommodityData

```mermaid
classDiagram
    class DEL_SearchCriteriumType["{DEL}SearchCriteriumType"]
    class ADD_SearchCommodityDataResult["{ADD}SearchCommodityDataResult"]
    class Commodity_CommodityWS["Commodity : CommodityWS"]
    class UseCase_Model_DEL_Manage_commodity_data_from_external_system["UseCase Model :{DEL}Manage commodity data from external systems"]
    class DEL_01_696_Search_commodity_data_from_external_systems["{DEL}01.696 Search commodity data from external systems"]
    class ADD_ResultCodeSearch["{ADD}ResultCodeSearch"]
    class ADD_SearchCommodityDataResponse["{ADD}SearchCommodityDataResponse"]
    class DEL_SearchCriterium["{DEL}SearchCriterium"]
    class DEL_CommodityDataValues["{DEL}CommodityDataValues"]
    class DEL_SearchCommodityDataRequest["{DEL}SearchCommodityDataRequest"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    ADD_SearchCommodityDataResult --> DEL_CommodityDataValues : unnamed
    DEL_SearchCommodityDataRequest --> DEL_SearchCriterium : unnamed
    ADD_SearchCommodityDataResponse --> ADD_ResultCodeSearch : unnamed
    ADD_SearchCommodityDataResponse --> ADD_SearchCommodityDataResult : unnamed
    DEL_SearchCriterium --> DEL_SearchCriteriumType : unnamed
    DEL_CommodityWS --> DEL_01_696_Search_commodity_data_from_external_systems : unnamed
    DEL_CommodityWS --> Commodity_CommodityWS : unnamed
    DEL_CommodityWS --> DEL_SearchCommodityDataRequest : unnamed
    DEL_CommodityWS --> ADD_SearchCommodityDataResponse : unnamed
    DEL_01_696_Search_commodity_data_from_external_systems --> UseCase_Model_DEL_Manage_commodity_data_from_external_system : unnamed
```
