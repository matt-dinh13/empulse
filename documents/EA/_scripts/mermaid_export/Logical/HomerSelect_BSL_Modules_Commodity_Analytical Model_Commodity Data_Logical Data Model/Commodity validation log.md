# Commodity validation log

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model
- **Diagram ID**: 164435
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class Logical_Data_Model_Commodity_Data["Logical Data Model : Commodity Data"]
    class Commodity_Duplication_Validation_List["Commodity Duplication Validation List"]
    class Commodity_Validation_Rule["Commodity Validation Rule"]
    class Result_Code_Type["Result Code Type"]
    class Commodity_duplication_validation["Commodity duplication validation"]
    class Commodity_Validation_Cancelation["Commodity Validation Cancelation"]
    class Commodity_Validation["Commodity Validation"]
    class MOD_Commodity["{MOD}Commodity"]
    MOD_Commodity o-- Commodity_duplication_validation : unnamed
    MOD_Commodity o-- Commodity_Validation_Cancelation : unnamed
    MOD_Commodity o-- Commodity_Duplication_Validation_List : unnamed
    MOD_Commodity o-- Commodity_Validation : unnamed
    Commodity_duplication_validation o-- Commodity_Duplication_Validation_List : unnamed
    Commodity_Validation ..> Result_Code_Type : unnamed
    Commodity_duplication_validation ..> Commodity_Validation_Rule : unnamed
```
