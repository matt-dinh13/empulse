# Set Commodity Validation Rule

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/UI for Commodity Validation Setting/User Interface
- **Diagram ID**: 119671
- **Elements**: 20
- **Connectors**: 5

```mermaid
graph TD
    Save["Save"]
    Cancel["Cancel"]
    User_Interface_Search_Commodity_Validation_Rule["User Interface : Search Commodity Validation Rule"]
    User_Interface_Show_Commodity_Validation_Rule["User Interface : Show Commodity Validation Rule"]
    DEL_01_611_Create_new_Commodity_Validation_Rule_UI["{DEL}01.611 Create new Commodity Validation Rule UI"]
    DEL_01_614_Clone_Commodity_Validation_Rule_UI["{DEL}01.614 Clone Commodity Validation Rule UI"]
    DEL_01_612_Update_Commodity_Validation_Rule_UI["{DEL}01.612 Update Commodity Validation Rule UI"]
    External_Type["External Type"]
    Type["Type"]
    Order["Order"]
    Criterions["Criterions"]
    Add["Add"]
    Value["Value"]
    Type["Type"]
    Criterions["Criterions"]
    Valid_To["Valid To"]
    Valid_From["Valid From"]
    Code["Code"]
    Name["Name"]
    Set_Commodity_Validation_Rule["Set Commodity Validation Rule"]
    Set_Commodity_Validation_Rule -->|unnamed| DEL_01_612_Update_Commodity_Validation_Rule_UI
    Set_Commodity_Validation_Rule -->|unnamed| DEL_01_614_Clone_Commodity_Validation_Rule_UI
    Set_Commodity_Validation_Rule -->|unnamed| DEL_01_611_Create_new_Commodity_Validation_Rule_UI
    Save -->|unnamed| User_Interface_Show_Commodity_Validation_Rule
    Cancel -->|unnamed| User_Interface_Show_Commodity_Validation_Rule
```
