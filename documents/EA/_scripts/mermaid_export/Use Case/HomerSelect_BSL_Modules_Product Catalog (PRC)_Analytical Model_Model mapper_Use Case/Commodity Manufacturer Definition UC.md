# Commodity Manufacturer Definition UC

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case
- **Diagram ID**: 162656
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph LR
    ADD_GetCommodityManufacturerDefinitionRequest_search_filter["{ADD}GetCommodityManufacturerDefinitionRequest - search filter"]
    ADD_GetCommodityManufacturerDefinition_validation_rules["{ADD}GetCommodityManufacturerDefinition - validation rules"]
    DEL_08_803_Get_Commodity_Manufacturer_Definition(("{DEL}08.803 Get Commodity Manufacturer Definition"))
    ADD_DeactivateCommodityManufacturerDefinition_validation_rul["{ADD}DeactivateCommodityManufacturerDefinition - validation rules"]
    DEL_08_802_Deactivate_Commodity_Manufacturer_Definition(("{DEL}08.802 Deactivate Commodity Manufacturer Definition"))
    ADD_CreateCommodityManufacturerDefinition_validation_rules["{ADD}CreateCommodityManufacturerDefinition - validation rules"]
    DEL_08_801_Create_Commodity_Manufacturer_Definition(("{DEL}08.801 Create Commodity Manufacturer Definition"))
    External_Component[/"External Component"/]
    DEL_08_801_Create_Commodity_Manufacturer_Definition -->|unnamed| ADD_CreateCommodityManufacturerDefinition_validation_rules
    DEL_08_802_Deactivate_Commodity_Manufacturer_Definition -->|unnamed| ADD_DeactivateCommodityManufacturerDefinition_validation_rul
    DEL_08_803_Get_Commodity_Manufacturer_Definition -->|unnamed| ADD_GetCommodityManufacturerDefinition_validation_rules
    DEL_08_803_Get_Commodity_Manufacturer_Definition -->|unnamed| ADD_GetCommodityManufacturerDefinitionRequest_search_filter
    External_Component --- DEL_08_802_Deactivate_Commodity_Manufacturer_Definition
    External_Component --- DEL_08_801_Create_Commodity_Manufacturer_Definition
    External_Component --- DEL_08_803_Get_Commodity_Manufacturer_Definition
```
