# AccountManagementWS - Contract cancellation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136829
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Creation_of_contract_cancellation_request_automatic_cancel["Creation of contract cancellation request - automatic cancel"]
    class Creation_of_contract_cancellation_request_manual_cancel["Creation of contract cancellation request - manual cancel"]
    class CancelRequestItemDto["CancelRequestItemDto"]
    class CancelAccountResponse["CancelAccountResponse"]
    class CancelAccountRequest["CancelAccountRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS ..> CancelAccountRequest : unnamed
    AccountManagementWS ..> CancelAccountResponse : unnamed
    CancelAccountRequest ..> CancelRequestItemDto : unnamed
    Creation_of_contract_cancellation_request_manual_cancel ..> AccountManagementWS : unnamed
    Creation_of_contract_cancellation_request_automatic_cancel ..> AccountManagementWS : unnamed
```
