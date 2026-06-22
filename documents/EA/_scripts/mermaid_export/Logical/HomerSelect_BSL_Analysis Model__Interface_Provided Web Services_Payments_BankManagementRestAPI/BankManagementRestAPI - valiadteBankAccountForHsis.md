# BankManagementRestAPI - valiadteBankAccountForHsis

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI
- **Diagram ID**: 162693
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_00_194_Validate_Bank_Account_for_HSIS["00.194 Validate Bank Account for HSIS"]
    class validateBankAccountForHsisResponse["validateBankAccountForHsisResponse"]
    class validateBankAccountForHsisRequest["validateBankAccountForHsisRequest"]
    class BankManagementRestAPIv3["BankManagementRestAPIv3"]
    n_00_194_Validate_Bank_Account_for_HSIS <|.. BankManagementRestAPIv3 : unnamed
    BankManagementRestAPIv3 ..> validateBankAccountForHsisResponse : unnamed
    BankManagementRestAPIv3 ..> validateBankAccountForHsisRequest : unnamed
```
