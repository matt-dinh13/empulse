# AccountManagementWS (v6) - GetAccountBalance

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)
- **Diagram ID**: 145911
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class BalanceDto["BalanceDto"]
    class AccountBalanceDto["AccountBalanceDto"]
    class AccountManagementResponseBaseDto["AccountManagementResponseBaseDto"]
    class AccountNumberType["AccountNumberType"]
    class GetAccountBalanceResponse["GetAccountBalanceResponse"]
    class GetAccountBalanceRequest["GetAccountBalanceRequest"]
    class AccountManagementWS_v6["AccountManagementWS (v6)"]
    AccountManagementWS_v6 ..> GetAccountBalanceResponse : unnamed
    AccountManagementWS_v6 ..> GetAccountBalanceRequest : unnamed
    GetAccountBalanceRequest ..> AccountNumberType : unnamed
    AccountManagementResponseBaseDto <|-- GetAccountBalanceResponse : unnamed
    GetAccountBalanceResponse ..> AccountBalanceDto : unnamed
    BalanceDto <|-- AccountBalanceDto : unnamed
```
