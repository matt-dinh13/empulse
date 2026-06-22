# Commodity Types and Categories

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Logical Data Model
- **Diagram ID**: 152301
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class UpdateMode["UpdateMode"]
    class Field_Setting_Type["Field Setting Type"]
    class Commodity_field_settings["Commodity field settings"]
    class Commodity_Type_Criterion_Type["Commodity Type Criterion Type"]
    class Commodity_Type_Criterion["Commodity Type Criterion"]
    class Commodity_Risk_Category_Type["Commodity Risk Category Type"]
    class MOD_Commodity_Type_Flag_Type["{MOD}Commodity Type Flag Type"]
    class Commodity_Type_Flag["Commodity Type Flag"]
    class Commodity_Type["Commodity Type"]
    class Commodity_Category["Commodity Category"]
    Commodity_Type --> Commodity_Category : unnamed
    Commodity_Type o-- Commodity_field_settings : unnamed
    Commodity_Type o-- Commodity_Type_Criterion : unnamed
    Commodity_Type o-- Commodity_Type_Flag : unnamed
    Commodity_Type_Flag ..> MOD_Commodity_Type_Flag_Type : unnamed
    Commodity_Category ..> Commodity_Risk_Category_Type : unnamed
    Commodity_Type_Criterion ..> Commodity_Type_Criterion_Type : unnamed
    Commodity_field_settings ..> Field_Setting_Type : unnamed
    Commodity_field_settings ..> UpdateMode : unnamed
```
