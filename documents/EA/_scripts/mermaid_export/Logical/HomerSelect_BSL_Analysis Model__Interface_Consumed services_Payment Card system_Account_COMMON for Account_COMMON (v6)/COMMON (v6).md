# COMMON (v6)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/COMMON for Account/COMMON (v6)
- **Diagram ID**: 141768
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class AccountStatusDto["AccountStatusDto"]
    class CashLimitType["CashLimitType"]
    class IbanType["IbanType"]
    class AccountTypeDto["AccountTypeDto"]
    class ContractCodeType["ContractCodeType"]
    class AccountDto["AccountDto"]
    class AccountNumberType["AccountNumberType"]
    AccountDto ..> AccountNumberType : unnamed
    AccountDto ..> ContractCodeType : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    AccountDto ..> IbanType : unnamed
    AccountDto ..> CashLimitType : unnamed
    AccountDto ..> AccountStatusDto : unnamed
```
