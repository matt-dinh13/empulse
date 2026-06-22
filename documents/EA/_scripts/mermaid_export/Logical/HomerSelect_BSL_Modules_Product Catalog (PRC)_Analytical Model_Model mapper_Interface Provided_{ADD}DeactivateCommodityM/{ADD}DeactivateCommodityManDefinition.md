# {ADD}DeactivateCommodityManDefinition

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Interface Provided/{ADD}DeactivateCommodityManDefinition
- **Diagram ID**: 111139
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class CommodityManDefinition["CommodityManDefinition"]
    class Use_Case_Commodity_Manufacturer_Definition_UC["Use Case : Commodity Manufacturer Definition UC"]
    class DEL_08_802_Deactivate_Commodity_Manufacturer_Definition["{DEL}08.802 Deactivate Commodity Manufacturer Definition"]
    class resultCodeDefinitionDeactivate["resultCodeDefinitionDeactivate"]
    class Interface_Provided_CommodityManufacturerDefinitionWS["Interface Provided :CommodityManufacturerDefinitionWS"]
    class resultDefinitionDeactivate["resultDefinitionDeactivate"]
    class DeactivateCommodityManDefinitionResponse["DeactivateCommodityManDefinitionResponse"]
    class DeactivateCommodityManDefinitionRequest["DeactivateCommodityManDefinitionRequest"]
    class DEL_CommodityManufacturerDefinitionWS["{DEL}CommodityManufacturerDefinitionWS"]
    Interface_Provided_CommodityManufacturerDefinitionWS --> DEL_CommodityManufacturerDefinitionWS : unnamed
    DeactivateCommodityManDefinitionResponse ..> resultDefinitionDeactivate : unnamed
    resultDefinitionDeactivate ..> resultCodeDefinitionDeactivate : unnamed
    DeactivateCommodityManDefinitionRequest ..> CommodityManDefinition : unnamed
    resultDefinitionDeactivate ..> CommodityManDefinition : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> DeactivateCommodityManDefinitionRequest : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> DeactivateCommodityManDefinitionResponse : unnamed
    DEL_CommodityManufacturerDefinitionWS ..> DEL_08_802_Deactivate_Commodity_Manufacturer_Definition : unnamed
    DEL_08_802_Deactivate_Commodity_Manufacturer_Definition --> Use_Case_Commodity_Manufacturer_Definition_UC : unnamed
```
