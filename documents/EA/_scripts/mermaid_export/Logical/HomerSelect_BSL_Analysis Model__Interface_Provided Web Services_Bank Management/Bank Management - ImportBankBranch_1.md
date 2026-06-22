# Bank Management - ImportBankBranch

```mermaid
classDiagram
    class ADD_00_201_Bank_Branch_Import["{ADD}00.201 Bank Branch Import"]
    class BankBranchImportResultCode["BankBranchImportResultCode"]
    class BankBranchImportError["BankBranchImportError"]
    class BankBranchImportResponse["BankBranchImportResponse"]
    class BankBranchImportRequest["BankBranchImportRequest"]
    class ADD_BankManagementWS["{ADD} BankManagementWS"]
    ADD_BankManagementWS --> ADD_00_201_Bank_Branch_Import : unnamed
    ADD_BankManagementWS --> BankBranchImportError : unnamed
    ADD_BankManagementWS --> BankBranchImportResponse : unnamed
    ADD_BankManagementWS --> BankBranchImportRequest : unnamed
    BankBranchImportError --> BankBranchImportResultCode : unnamed
```
