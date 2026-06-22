# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Type/Use Case
- **Diagram ID**: 135952
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Commodity_type_validation["Commodity type - validation"]
    PUT_Commodity_Type(("PUT Commodity Type"))
    POST_Commodity_Type(("POST Commodity Type"))
    MOD_GET_Commodity_Type(("{MOD}GET Commodity Type"))
    PUT_Commodity_Type -->|unnamed| Commodity_type_validation
    POST_Commodity_Type -->|unnamed| Commodity_type_validation
    MOD_GET_Commodity_Type -->|unnamed| Commodity_type_validation
```
