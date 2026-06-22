# Create Tariff

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface
- **Diagram ID**: 159452
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    User_Interface_Set_main_Tariff_properties["User Interface : Set main Tariff properties"]
    Code["Code"]
    DEL_04_015_Create_Tariff_by_copy["{DEL}04.015 Create Tariff by copy"]
    DEL_04_010_Create_Tariff["{DEL}04.010 Create Tariff"]
    Cancel["Cancel"]
    OK["OK"]
    Create_tariff["Create tariff"]
    Create_tariff -->|unnamed| DEL_04_010_Create_Tariff
    Create_tariff -->|unnamed| DEL_04_015_Create_Tariff_by_copy
    OK -->|unnamed| User_Interface_Set_main_Tariff_properties
```
