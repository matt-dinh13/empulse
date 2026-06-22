# Use Case

```mermaid
graph TD
    Commodity_type_validation["Commodity type - validation"]
    PUT_Commodity_Type["PUT Commodity Type"]
    POST_Commodity_Type["POST Commodity Type"]
    MOD_GET_Commodity_Type["{MOD}GET Commodity Type"]
    PUT_Commodity_Type -->|unnamed| Commodity_type_validation
    POST_Commodity_Type -->|unnamed| Commodity_type_validation
    MOD_GET_Commodity_Type -->|unnamed| Commodity_type_validation
```
