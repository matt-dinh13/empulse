# AccountManagementWS - Terminate account

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136831
- **Elements**: 14
- **Connectors**: 15

```mermaid
classDiagram
    class RepaymentSimulationRequest["RepaymentSimulationRequest"]
    class RepaymentSimulationResponse["RepaymentSimulationResponse"]
    class TariffItemTypeMoneyPair["TariffItemTypeMoneyPair"]
    class BillingPeriodFilterDto["BillingPeriodFilterDto"]
    class DateRangeDto["DateRangeDto"]
    class BillingPeriodInfoDto["BillingPeriodInfoDto"]
    class BillingPeriodBalanceDto["BillingPeriodBalanceDto"]
    class GetBillingPeriodRequest["GetBillingPeriodRequest"]
    class GetBillingPeriodsResponse["GetBillingPeriodsResponse"]
    class RepaymentSimulationResponseBase["RepaymentSimulationResponseBase"]
    class TerminateSimulationResponse["TerminateSimulationResponse"]
    class TerminateSimulationRequest["TerminateSimulationRequest"]
    class RepaymentSimulationRequestBase["RepaymentSimulationRequestBase"]
    class AccountManagementWS["AccountManagementWS"]
    RepaymentSimulationRequestBase <|-- TerminateSimulationRequest : unnamed
    RepaymentSimulationRequestBase <|-- RepaymentSimulationRequest : unnamed
    AccountManagementWS ..> TerminateSimulationRequest : unnamed
    AccountManagementWS ..> TerminateSimulationResponse : unnamed
    RepaymentSimulationResponseBase <|-- RepaymentSimulationResponse : unnamed
    RepaymentSimulationResponseBase <|-- TerminateSimulationResponse : unnamed
    AccountManagementWS ..> GetBillingPeriodsResponse : unnamed
    AccountManagementWS ..> GetBillingPeriodRequest : unnamed
    GetBillingPeriodsResponse ..> BillingPeriodInfoDto : unnamed
    BillingPeriodFilterDto ..> DateRangeDto : External Reference
    GetBillingPeriodRequest ..> BillingPeriodFilterDto : unnamed
    BillingPeriodBalanceDto ..> TariffItemTypeMoneyPair : unnamed
    AccountManagementWS ..> RepaymentSimulationResponse : unnamed
    AccountManagementWS ..> RepaymentSimulationRequest : unnamed
    RepaymentSimulationResponseBase ..> BillingPeriodBalanceDto : unnamed
```
