# Full Early Repayment Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/FER
- **Diagram ID**: 157035
- **Elements**: 8
- **Connectors**: 4

```mermaid
classDiagram
    class Service["Service"]
    class MOD_ALG_Early_repayment_calculation_A2_Unpaid_principal_only["{MOD}ALG_Early repayment calculation A2 - Unpaid principal only"]
    class Full_Early_Repayment_Service_Variant["Full Early Repayment Service Variant"]
    class Logical_Data_Model_Early_repayment_request["Logical Data Model : Early repayment request"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    class MOD_Full_Early_Repayment_Service["{MOD}Full Early Repayment Service"]
    class Early_Repayment_Algorithm_Type["Early Repayment Algorithm Type"]
    MOD_Full_Early_Repayment_Service ..> Early_Repayment_Algorithm_Type : unnamed
    MOD_Full_Early_Repayment_Service o-- Full_Early_Repayment_Service_Variant : unnamed
    Early_Repayment_Algorithm_Type ..> MOD_ALG_Early_repayment_calculation_A1 : unnamed
    Early_Repayment_Algorithm_Type ..> MOD_ALG_Early_repayment_calculation_A2_Unpaid_principal_only : unnamed
```
