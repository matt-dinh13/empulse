# Getting Commodity Data from Manufacturer

```mermaid
classDiagram
    class n_01_010_Choose_product_offer["01.010 Choose product offer"]
    class CommodityDataSKU["CommodityDataSKU"]
    class CommodityDataModel["CommodityDataModel"]
    class GetCommodityDataResponse["GetCommodityDataResponse"]
    class GetCommodityDataRequest["GetCommodityDataRequest"]
    class UseCase_Model_Getting_Commodity_Data_from_Manufacturer["UseCase Model : Getting Commodity Data from Manufacturer"]
    class MOD_CommodityManufacturerWS["{MOD}CommodityManufacturerWS"]
    MOD_CommodityManufacturerWS --> GetCommodityDataRequest : unnamed
    MOD_CommodityManufacturerWS --> GetCommodityDataResponse : unnamed
    GetCommodityDataResponse --> CommodityDataModel : unnamed
    CommodityDataModel --> CommodityDataSKU : unnamed
    MOD_CommodityManufacturerWS --> n_01_010_Choose_product_offer : unnamed
```
