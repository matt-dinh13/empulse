# Business Rules

```mermaid
graph TD
    ADD_Select_commodity_for_archivation["{ADD}Select commodity for archivation"]
    SN_duplicity_check["SN duplicity check"]
    IMEI_duplicity_check["IMEI duplicity check"]
    DEL_GetCommodityValidationDataRequest_filter["{DEL}GetCommodityValidationDataRequest - filter"]
    DEL_SearchCommodityDataRequest_filter["{DEL}SearchCommodityDataRequest - filter"]
    Commodity_Validation_Rule_filter["Commodity Validation Rule filter"]
    Commodity_Validation_algorithm["Commodity Validation algorithm"]
    MOD_Get_Commodity_Data_Enabled_For_Update["{MOD}Get Commodity Data Enabled For Update"]
    Commodity_Validation_algorithm -->|unnamed| Commodity_Validation_Rule_filter
    Commodity_Validation_algorithm -->|unnamed| Commodity_Validation_Rule_filter
    Commodity_Validation_algorithm -->|unnamed| IMEI_duplicity_check
    Commodity_Validation_algorithm -->|unnamed| SN_duplicity_check
```
