# BankManagementRestAPI - Get Bank Branch Data

```mermaid
classDiagram
    class BankBranchExtendedProperties["BankBranchExtendedProperties"]
    class ADD_00_193_Get_Bank_Branch_data_via_Rest_API["{ADD}00.193 Get Bank Branch data via Rest API"]
    class BankBranchData["BankBranchData"]
    class GetBankBranchDataResponse["GetBankBranchDataResponse"]
    class GetBankBranchDataRequest["GetBankBranchDataRequest"]
    class BankManagementRestAPIv3["BankManagementRestAPIv3"]
    BankManagementRestAPIv3 --> GetBankBranchDataResponse : unnamed
    BankManagementRestAPIv3 --> GetBankBranchDataRequest : unnamed
    BankManagementRestAPIv3 --> ADD_00_193_Get_Bank_Branch_data_via_Rest_API : unnamed
    GetBankBranchDataResponse --> BankBranchData : unnamed
    BankBranchData --> BankBranchExtendedProperties : unnamed
```
