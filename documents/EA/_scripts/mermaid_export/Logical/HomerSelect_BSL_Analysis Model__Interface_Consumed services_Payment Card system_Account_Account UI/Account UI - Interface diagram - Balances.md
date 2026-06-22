# Account UI - Interface diagram - Balances

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI
- **Diagram ID**: 67278
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class DateRangeDto["DateRangeDto"]
    class BillingPeriodBalanceDto["BillingPeriodBalanceDto"]
    class BillingSessionTypeDto["BillingSessionTypeDto"]
    class AccountUIWS["AccountUIWS"]
    class MoneyDto["MoneyDto"]
    class BillingPeriodBalanceUISearchDto["BillingPeriodBalanceUISearchDto"]
    class ui_GetAccountBillingPeriodBalancesResponse["ui:GetAccountBillingPeriodBalancesResponse"]
    class GetAccountBillingPeriodBalancesRequest["GetAccountBillingPeriodBalancesRequest"]
    AccountUIWS ..> GetAccountBillingPeriodBalancesRequest : unnamed
    AccountUIWS ..> ui_GetAccountBillingPeriodBalancesResponse : unnamed
    GetAccountBillingPeriodBalancesRequest ..> BillingPeriodBalanceUISearchDto : unnamed
    ui_GetAccountBillingPeriodBalancesResponse ..> BillingPeriodBalanceDto : unnamed
    BillingPeriodBalanceDto ..> BillingSessionTypeDto : unnamed
    BillingPeriodBalanceDto ..> MoneyDto : unnamed
    BillingPeriodBalanceUISearchDto ..> BillingSessionTypeDto : unnamed
```
