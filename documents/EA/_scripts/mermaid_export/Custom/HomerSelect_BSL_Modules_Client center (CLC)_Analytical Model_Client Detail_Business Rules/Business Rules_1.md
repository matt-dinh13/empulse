# Business Rules

```mermaid
graph TD
    ADD_Get_active_Customer_offers["{ADD}Get active Customer offers"]
    Get_original_number_instead_of_alias_for_Unique_Id_document["Get original number instead of alias for Unique Id document"]
    MOD_Mask_client_data["{MOD}Mask client data"]
    ADD_Check_Customer_offers_availability_on_Salesroom["{ADD}Check Customer offers availability on Salesroom"]
    ADD_Get_active_Customer_offers -->|unnamed| ADD_Check_Customer_offers_availability_on_Salesroom
```
