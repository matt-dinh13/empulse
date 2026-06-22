# Account Management - REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/Account Management - REST_v2
- **Diagram ID**: 124534
- **Elements**: 5
- **Connectors**: 12

```mermaid
classDiagram
    class AccountBalanceRequest["AccountBalanceRequest"]
    class Account_Management["Account Management"]
    class MoneyDto["MoneyDto"]
    class AccountBalanceDto["AccountBalanceDto"]
    class OpenApiListResponseDto["OpenApiListResponseDto"]
    Account_Management ..> OpenApiListResponseDto : unnamed
    OpenApiListResponseDto ..> AccountBalanceDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    AccountBalanceDto ..> MoneyDto : unnamed
    Account_Management ..> AccountBalanceRequest : unnamed
```
