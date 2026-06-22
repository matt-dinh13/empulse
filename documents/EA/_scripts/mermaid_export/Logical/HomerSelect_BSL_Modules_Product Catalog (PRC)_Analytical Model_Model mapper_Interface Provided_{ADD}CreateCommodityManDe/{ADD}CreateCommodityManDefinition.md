# {ADD}CreateCommodityManDefinition

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Interface Provided/{ADD}CreateCommodityManDefinition
- **Diagram ID**: 111143
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class Use_Case_Commodity_Manufacturer_Definition_UC["Use Case : Commodity Manufacturer Definition UC"]
    class DEL_08_801_Create_Commodity_Manufacturer_Definition["{DEL}08.801 Create Commodity Manufacturer Definition"]
    class Interface_Provided_CommodityManufacturerDefinitionWS["Interface Provided :CommodityManufacturerDefinitionWS"]
    class resultCodeDefinitionCreate["resultCodeDefinitionCreate"]
    class resultDefinitionCreate["resultDefinitionCreate"]
    class CreateCommodityManDefinitionResponse["CreateCommodityManDefinitionResponse"]
    class CommodityManDefinition["CommodityManDefinition"]
    class CreateCommodityManDefinitionRequest["CreateCommodityManDefinitionRequest"]
    class DEL_CommodityManufacturerDefinitionWS["{DEL}CommodityManufacturerDefinitionWS"]
    Interface_Provided_CommodityManufacturerDefinitionWS --> DEL_CommodityManufacturerDefinitionWS : unnamed
    CreateCommodityManDefinitionRequest ..> CommodityManDefinition : unnamed
    resultDefinitionCreate ..> CommodityManDefinition : unnamed
    CreateCommodityManDefinitionResponse ..> resultDefinitionCreate : unnamed
    resultDefinitionCreate ..> resultCodeDefinitionCreate : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> CreateCommodityManDefinitionRequest : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> CreateCommodityManDefinitionResponse : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> DEL_08_801_Create_Commodity_Manufacturer_Definition : unnamed
    DEL_08_801_Create_Commodity_Manufacturer_Definition --> Use_Case_Commodity_Manufacturer_Definition_UC : unnamed
```
