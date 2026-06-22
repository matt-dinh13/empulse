# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Use Case
- **Diagram ID**: 164403
- **Elements**: 13
- **Connectors**: 22

```mermaid
graph LR
    MOD_External_validation_cancellation["{MOD}External validation cancellation"]
    Cancel_external_validation(("Cancel external validation"))
    External_System[/"External System"/]
    Commodity_Validation_algorithm["Commodity Validation algorithm"]
    Commodity_Validation_Rule_filter["Commodity Validation Rule filter"]
    MOD_POST_Commodity_Validation(("{MOD}POST Commodity Validation"))
    MOD_Commodity_validation["{MOD}Commodity - validation"]
    MOD_Get_Commodity_Data_Enabled_For_Update["{MOD}Get Commodity Data Enabled For Update"]
    GET_Commodity_for_update(("GET Commodity for update"))
    DELETE_Commodity(("DELETE Commodity"))
    PUT_Commodity(("PUT Commodity"))
    POST_Commodity(("POST Commodity"))
    GET_Commodity(("GET Commodity"))
    GET_Commodity -->|unnamed| MOD_Commodity_validation
    DELETE_Commodity -->|unnamed| MOD_External_validation_cancellation
    PUT_Commodity -->|unnamed| MOD_External_validation_cancellation
    External_System --- Cancel_external_validation
    MOD_Commodity_validation -->|unnamed| Commodity_Validation_algorithm
    MOD_POST_Commodity_Validation -->|unnamed| Commodity_Validation_algorithm
    MOD_POST_Commodity_Validation -->|unnamed| Commodity_Validation_Rule_filter
    GET_Commodity_for_update -->|unnamed| MOD_Commodity_validation
    External_System --- GET_Commodity
    DELETE_Commodity -->|unnamed| MOD_Commodity_validation
    PUT_Commodity -->|unnamed| MOD_Commodity_validation
    POST_Commodity -->|unnamed| MOD_Commodity_validation
    GET_Commodity_for_update -->|unnamed| MOD_Get_Commodity_Data_Enabled_For_Update
    MOD_Commodity_validation -->|unnamed| MOD_Get_Commodity_Data_Enabled_For_Update
    External_System --- GET_Commodity_for_update
    External_System --- DELETE_Commodity
    External_System --- PUT_Commodity
    External_System --- POST_Commodity
    External_System --- MOD_POST_Commodity_Validation
    Commodity_Validation_algorithm -->|unnamed| Commodity_Validation_Rule_filter
    Commodity_Validation_algorithm -->|unnamed| Commodity_Validation_Rule_filter
    Cancel_external_validation -->|unnamed| MOD_External_validation_cancellation
```
