# AccountManagementWS - Print last statement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136832
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class BillingPeriodFilterDto["BillingPeriodFilterDto"]
    class DateRangeDto["DateRangeDto"]
    class GenerateStatementResponse["GenerateStatementResponse"]
    class GenerateStatementRequest["GenerateStatementRequest"]
    class BillingPeriodInfoDto["BillingPeriodInfoDto"]
    class BillingSessionTypeDto["BillingSessionTypeDto"]
    class GetBillingPeriodsResponse["GetBillingPeriodsResponse"]
    class GetBillingPeriodRequest["GetBillingPeriodRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS ..> GetBillingPeriodRequest : unnamed
    AccountManagementWS ..> GetBillingPeriodsResponse : unnamed
    GetBillingPeriodsResponse ..> BillingPeriodInfoDto : unnamed
    AccountManagementWS ..> GenerateStatementRequest : unnamed
    AccountManagementWS ..> GenerateStatementResponse : unnamed
    BillingPeriodFilterDto ..> DateRangeDto : External Reference
    GetBillingPeriodRequest ..> BillingPeriodFilterDto : unnamed
    BillingPeriodInfoDto ..> BillingSessionTypeDto : unnamed
```
