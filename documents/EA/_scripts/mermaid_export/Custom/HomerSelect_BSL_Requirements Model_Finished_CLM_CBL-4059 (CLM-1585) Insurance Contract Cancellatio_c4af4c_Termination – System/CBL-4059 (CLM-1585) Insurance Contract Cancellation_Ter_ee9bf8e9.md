# CBL-4059 (CLM-1585) Insurance Contract Cancellation/Termination – System Improvement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4059 (CLM-1585) Insurance Contract Cancellation/Termination – System Improvement
- **Diagram ID**: 111190
- **Elements**: 8
- **Connectors**: 5

```mermaid
graph TD
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    Get_termination_date_for_CEL_insurance["Get termination date for CEL insurance"]
    REQ_1_Insurance_Contract_Cancellation_Termination_System_Imp["REQ#1 - Insurance Contract Cancellation/Termination – System Improvement"]
    MOD_11_111_Cancel_insurance_contract_manually["{MOD}11.111 Cancel insurance contract manually"]
    n_11_121_Terminate_insurance_contract_manually["11.121 Terminate insurance contract manually"]
    User_Interface_Service_termination["User Interface : Service termination"]
    User_Interface_Service_cancellation["User Interface : Service cancellation"]
    Tab_Insurance_Tab_Insurance["Tab-Insurance : Tab-Insurance"]
    Tab_Insurance_Tab_Insurance -->|unnamed| MOD_11_111_Cancel_insurance_contract_manually
    User_Interface_Service_cancellation -->|unnamed| MOD_11_111_Cancel_insurance_contract_manually
    User_Interface_Service_termination -->|unnamed| n_11_121_Terminate_insurance_contract_manually
    Tab_Insurance_Tab_Insurance -->|unnamed| n_11_121_Terminate_insurance_contract_manually
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| Get_termination_date_for_CEL_insurance
```
