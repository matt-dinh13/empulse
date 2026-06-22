# Grace period for REL

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRREL
- **Diagram ID**: 155830
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class Service["Service"]
    class ADD_GRREL_Calculation_Algorithm_Type["{ADD}GRREL Calculation Algorithm Type"]
    class Grace_Period_REL_To_Tariff_Item_Type["Grace Period REL To Tariff Item Type"]
    class Tariff_Item_Type["Tariff Item Type"]
    class MOD_Grace_Period_REL_Service["{MOD}Grace Period REL Service "]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    Grace_Period_REL_To_Tariff_Item_Type ..> Tariff_Item_Type : unnamed
    MOD_Grace_Period_REL_Service --> Grace_Period_REL_To_Tariff_Item_Type : unnamed
    MOD_Grace_Period_REL_Service ..> ADD_GRREL_Calculation_Algorithm_Type : unnamed
```
