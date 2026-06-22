# Account ManagementWS - Account termination

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136835
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class TerminationOwnFundsSettlementTypeDto["TerminationOwnFundsSettlementTypeDto"]
    class AccountManagementWS["AccountManagementWS"]
    class CancelTerminationResponse["CancelTerminationResponse"]
    class CancelTerminationRequest["CancelTerminationRequest"]
    class TerminateResponse["TerminateResponse"]
    class TerminateRequest["TerminateRequest"]
    AccountManagementWS ..> TerminateRequest : unnamed
    AccountManagementWS ..> TerminateResponse : unnamed
    AccountManagementWS ..> CancelTerminationRequest : unnamed
    AccountManagementWS ..> CancelTerminationResponse : unnamed
    TerminateRequest ..> TerminationOwnFundsSettlementTypeDto : unnamed
```
