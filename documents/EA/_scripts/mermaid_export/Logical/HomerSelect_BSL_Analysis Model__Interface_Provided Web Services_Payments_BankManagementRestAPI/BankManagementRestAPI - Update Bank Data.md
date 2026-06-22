# BankManagementRestAPI - Update Bank Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI
- **Diagram ID**: 162691
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class BankExtendedProperties["BankExtendedProperties"]
    class UpdateBankDataResponse["UpdateBankDataResponse"]
    class UpdateBankDataRequest["UpdateBankDataRequest"]
    class BankManagementRestAPIv3["BankManagementRestAPIv3"]
    BankManagementRestAPIv3 ..> UpdateBankDataResponse : unnamed
    BankManagementRestAPIv3 ..> UpdateBankDataRequest : unnamed
    UpdateBankDataRequest ..> BankExtendedProperties : unnamed
```
