# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Type/Access Rights
- **Diagram ID**: 130290
- **Elements**: 8
- **Connectors**: 5

```mermaid
graph TD
    MOD_GET_Commodity_Type["{MOD}GET Commodity Type"]
    GET_Commodity_Code_List["GET Commodity Code List"]
    PUT_Commodity_Type["PUT Commodity Type"]
    n_02_490_Provide_Commodity_Type_Criterion["02.490 Provide Commodity Type Criterion"]
    POST_Commodity_Type["POST Commodity Type"]
    n_02_440_Update_commodity_type["02.440 Update commodity type"]
    n_02_420_Create_commodity_type["02.420 Create commodity type"]
    n_02_470_Provide_Commodity_Type_Data["02.470 Provide Commodity Type Data"]
    GET_Commodity_Code_List -->|unnamed| n_02_470_Provide_Commodity_Type_Data
    MOD_GET_Commodity_Type -->|unnamed| n_02_470_Provide_Commodity_Type_Data
    PUT_Commodity_Type -->|unnamed| n_02_440_Update_commodity_type
    POST_Commodity_Type -->|unnamed| n_02_420_Create_commodity_type
    MOD_GET_Commodity_Type -->|unnamed| n_02_490_Provide_Commodity_Type_Criterion
```
