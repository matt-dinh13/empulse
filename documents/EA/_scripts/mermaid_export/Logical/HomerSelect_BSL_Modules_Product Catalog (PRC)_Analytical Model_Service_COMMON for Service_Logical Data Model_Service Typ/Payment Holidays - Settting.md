# Payment Holidays - Settting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/PAYHOL
- **Diagram ID**: 142427
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class MOD_Bonus_Services_Impact_Type["{MOD}Bonus Services Impact Type"]
    class MOD_Payment_Holiday_Service["{MOD}Payment Holiday Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    MOD_Payment_Holiday_Service ..> MOD_Bonus_Services_Impact_Type : unnamed
```
