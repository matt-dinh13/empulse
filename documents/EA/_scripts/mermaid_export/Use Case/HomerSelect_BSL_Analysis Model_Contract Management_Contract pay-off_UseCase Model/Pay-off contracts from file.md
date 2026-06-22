# Pay-off contracts from file

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model
- **Diagram ID**: 164395
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph LR
    UseCase_Model_Pay_off_CEL_contract["UseCase Model : Pay-off CEL contract"]
    n_01_502_Pay_off_CEL_contract(("01.502 Pay-off CEL contract"))
    unnamed["unnamed"]
    User_Interface_Model_Pay_off_contracts_from_file["User Interface Model :Pay off contracts from file"]
    PayOffs_PayOffs_file_structure["PayOffs : PayOffs file structure"]
    User[/"User"/]
    Time[/"Time"/]
    n_01_490_Plan_pay_off_of_contracts_from_file(("01.490 Plan pay-off of contracts from file"))
    n_01_500_Pay_off_contracts_from_file(("01.500 Pay-off contracts from file"))
    n_01_500_Pay_off_contracts_from_file -.->|include| n_01_502_Pay_off_CEL_contract
    n_01_490_Plan_pay_off_of_contracts_from_file -->|unnamed| n_01_500_Pay_off_contracts_from_file
    PayOffs_PayOffs_file_structure -->|unnamed| n_01_500_Pay_off_contracts_from_file
    User_Interface_Model_Pay_off_contracts_from_file -->|unnamed| n_01_490_Plan_pay_off_of_contracts_from_file
    User --> n_01_490_Plan_pay_off_of_contracts_from_file
    Time --> n_01_500_Pay_off_contracts_from_file
```
