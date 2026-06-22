# AccountManagementWS - GetAccountBalance

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136833
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class AccountBalanceDto["AccountBalanceDto"]
    class BalanceDto["BalanceDto"]
    class GetAccountBalanceRequest["GetAccountBalanceRequest"]
    class GetAccountBalanceResponse["GetAccountBalanceResponse"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS ..> GetAccountBalanceResponse : unnamed
    AccountManagementWS ..> GetAccountBalanceRequest : unnamed
    GetAccountBalanceResponse ..> BalanceDto : unnamed
    BalanceDto <|-- AccountBalanceDto : unnamed
```
