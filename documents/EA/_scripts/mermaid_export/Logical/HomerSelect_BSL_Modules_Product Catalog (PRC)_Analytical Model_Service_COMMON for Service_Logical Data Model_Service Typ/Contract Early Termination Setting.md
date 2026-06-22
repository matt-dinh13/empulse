# Contract Early Termination Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CET
- **Diagram ID**: 134486
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class Logical_Data_Model_Early_repayment_request["Logical Data Model : Early repayment request"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    class MOD_Contract_Early_Termination_Service["{MOD}Contract Early Termination Service"]
    class Early_Repayment_Algorithm_Type["Early Repayment Algorithm Type"]
    MOD_Contract_Early_Termination_Service ..> Early_Repayment_Algorithm_Type : unnamed
    Early_Repayment_Algorithm_Type ..> MOD_ALG_Early_repayment_calculation_A1 : unnamed
```
