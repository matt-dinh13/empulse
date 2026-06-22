# AccountManagementWS (v6) - CancelAccount

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)
- **Diagram ID**: 145913
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CancelAccountRequestItemDto["CancelAccountRequestItemDto"]
    class CancelAccountResponse["CancelAccountResponse"]
    class CancelAccountRequest["CancelAccountRequest"]
    class AccountNumberType["AccountNumberType"]
    class AccountManagementResponseBaseDto["AccountManagementResponseBaseDto"]
    class AccountManagementWS_v6["AccountManagementWS (v6)"]
    AccountManagementWS_v6 ..> CancelAccountResponse : unnamed
    AccountManagementWS_v6 ..> CancelAccountRequest : unnamed
    CancelAccountRequest ..> CancelAccountRequestItemDto : unnamed
    AccountManagementResponseBaseDto <|-- CancelAccountResponse : unnamed
    CancelAccountRequestItemDto ..> AccountNumberType : External Reference
```
