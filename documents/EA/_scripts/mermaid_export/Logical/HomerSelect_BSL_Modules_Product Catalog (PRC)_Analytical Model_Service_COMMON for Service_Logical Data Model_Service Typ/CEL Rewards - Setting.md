# CEL Rewards - Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CELREW
- **Diagram ID**: 161438
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class MOD_CEL_Rewards_Service["{MOD}CEL Rewards Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    MOD_CEL_Rewards_Service o-- Payment_Discipline_Parameters : unnamed
```
