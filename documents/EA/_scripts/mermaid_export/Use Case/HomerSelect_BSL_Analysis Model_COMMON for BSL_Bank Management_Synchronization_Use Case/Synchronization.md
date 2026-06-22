# Synchronization

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Synchronization/Use Case
- **Diagram ID**: 162676
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph LR
    Bank_Management_BankManagementWS_BankImport["Bank Management : BankManagementWS - BankImport"]
    Bank_Management_Bank_Management_ImportBankBranch["Bank Management : Bank Management - ImportBankBranch"]
    ADD_00_191_Bank_Import(("{ADD}00.191 Bank Import"))
    ADD_00_201_Bank_Branch_Import(("{ADD}00.201 Bank Branch Import"))
    Bank_Management_BankManagementWS["Bank Management : BankManagementWS"]
    ADD_00_200_Provide_Bank_Branch_Data(("{ADD} 00.200 Provide Bank Branch Data"))
    External_system[/"External system"/]
    ADD_00_190_Provide_Bank_Data(("{ADD} 00.190 Provide Bank Data"))
    External_system --- ADD_00_200_Provide_Bank_Branch_Data
    External_system --- ADD_00_190_Provide_Bank_Data
    ADD_00_190_Provide_Bank_Data -->|unnamed| Bank_Management_BankManagementWS
    ADD_00_200_Provide_Bank_Branch_Data -->|unnamed| Bank_Management_BankManagementWS
    ADD_00_201_Bank_Branch_Import -->|unnamed| Bank_Management_BankManagementWS_BankImport
    ADD_00_191_Bank_Import -->|unnamed| Bank_Management_Bank_Management_ImportBankBranch
```
