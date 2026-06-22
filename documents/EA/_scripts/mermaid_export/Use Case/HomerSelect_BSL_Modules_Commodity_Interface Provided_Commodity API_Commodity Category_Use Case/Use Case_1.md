# Use Case

```mermaid
graph TD
    Commodity_Category_validation["Commodity Category - validation"]
    PUT_Commodity_Catrgories["PUT Commodity Catrgories"]
    POST_Commodity_Categories["POST Commodity Categories"]
    GET_Commodity_Categories["GET Commodity Categories"]
    PUT_Commodity_Catrgories -->|unnamed| Commodity_Category_validation
    POST_Commodity_Categories -->|unnamed| Commodity_Category_validation
    GET_Commodity_Categories -->|unnamed| Commodity_Category_validation
```
