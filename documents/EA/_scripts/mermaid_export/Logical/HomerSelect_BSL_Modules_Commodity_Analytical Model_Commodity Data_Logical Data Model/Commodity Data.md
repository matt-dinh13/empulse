# Commodity Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model
- **Diagram ID**: 164434
- **Elements**: 14
- **Connectors**: 11

```mermaid
classDiagram
    class Commodity_Duplication_Validation_List["Commodity Duplication Validation List"]
    class Device_App["Device App"]
    class Commodity_duplication_validation["Commodity duplication validation"]
    class Commodity_Validation_Cancelation["Commodity Validation Cancelation"]
    class Commodity_Status["Commodity Status"]
    class Logical_Data_Model_Commodity_Types_and_Categories["Logical Data Model : Commodity Types and Categories"]
    class Logical_Data_Model_Commodity_Validation_Rules["Logical Data Model :Commodity Validation Rules"]
    class Commodity_Delivery_Type["Commodity Delivery Type"]
    class Color["Color"]
    class Result_Code_Type["Result Code Type"]
    class Commodity_Validation["Commodity Validation"]
    class Commodity_Type["Commodity Type"]
    class MOD_Commodity["{MOD}Commodity"]
    MOD_Commodity o-- Commodity_duplication_validation : unnamed
    MOD_Commodity o-- Commodity_Validation : unnamed
    MOD_Commodity o-- Commodity_Duplication_Validation_List : unnamed
    MOD_Commodity o-- Commodity_Validation_Cancelation : unnamed
    MOD_Commodity --> Commodity_Type : unnamed
    Commodity_Validation ..> Result_Code_Type : unnamed
    MOD_Commodity ..> Color : unnamed
    MOD_Commodity ..> Commodity_Delivery_Type : unnamed
    MOD_Commodity ..> Commodity_Status : unnamed
    Commodity_duplication_validation o-- Commodity_Duplication_Validation_List : unnamed
    MOD_Commodity ..> Device_App : unnamed
```
