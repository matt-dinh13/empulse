# Pay-off contract manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model
- **Diagram ID**: 164393
- **Elements**: 14
- **Connectors**: 8

```mermaid
graph LR
    Check_for_unprocessed_Pay_off_request_existence["Check for unprocessed Pay-off request existence"]
    UseCase_Model_Pay_off_REL_contract["UseCase Model : Pay-off REL contract"]
    UseCase_Model_Pay_off_CEL_contract["UseCase Model : Pay-off CEL contract"]
    Check_pay_off_possibility_algorithm_GUI_RMQ["Check pay-off possibility algorithm (GUI/RMQ)"]
    Loyalty_system_LoyaltyManagementWS["Loyalty system : LoyaltyManagementWS"]
    Collection_system[/"Collection system"/]
    Loyalty_program[/"Loyalty program"/]
    Account_Management_AccountManagementWS_operations_used_at_co["Account Management : AccountManagementWS - operations used at contract payoff"]
    CaBus_AM[/"CaBus-AM"/]
    Collections_system_interfaces_LCS_interface_TerminationStatu["Collections system interfaces : LCS interface - TerminationStatusService"]
    n_01_502_Pay_off_CEL_contract(("01.502 Pay-off CEL contract"))
    User_Interface_Model_Pay_off_contracts["User Interface Model : Pay off contracts"]
    User[/"User"/]
    n_01_410_Pay_off_contract_manually(("01.410 Pay-off contract manually"))
    n_01_410_Pay_off_contract_manually -.->|include| n_01_502_Pay_off_CEL_contract
    n_01_410_Pay_off_contract_manually -->|unnamed| User_Interface_Model_Pay_off_contracts
    Check_pay_off_possibility_algorithm_GUI_RMQ -->|unnamed| Check_for_unprocessed_Pay_off_request_existence
    Check_pay_off_possibility_algorithm_GUI_RMQ -->|unnamed| n_01_410_Pay_off_contract_manually
    Collection_system --> n_01_410_Pay_off_contract_manually
    Loyalty_program --> n_01_410_Pay_off_contract_manually
    User --> n_01_410_Pay_off_contract_manually
    CaBus_AM --> n_01_410_Pay_off_contract_manually
```
