# AccountManagementWS - Account blocking

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136834
- **Elements**: 10
- **Connectors**: 11

```mermaid
classDiagram
    class GetPossibleBlockingReasonsResponse["GetPossibleBlockingReasonsResponse"]
    class GetPossibleBlockingReasonsRequest["GetPossibleBlockingReasonsRequest"]
    class BlockingReasonDto["BlockingReasonDto"]
    class AccountManagementWS["AccountManagementWS"]
    class GetBlockingReasonsResponse["GetBlockingReasonsResponse"]
    class GetBlockingReasonsRequest["GetBlockingReasonsRequest"]
    class UnblockAccountResponse["UnblockAccountResponse"]
    class UnblockAccountRequest["UnblockAccountRequest"]
    class BlockAccountResponse["BlockAccountResponse"]
    class BlockAccountRequest["BlockAccountRequest"]
    AccountManagementWS ..> BlockAccountRequest : unnamed
    AccountManagementWS ..> BlockAccountResponse : unnamed
    AccountManagementWS ..> UnblockAccountRequest : unnamed
    AccountManagementWS ..> UnblockAccountResponse : unnamed
    AccountManagementWS ..> GetBlockingReasonsRequest : unnamed
    AccountManagementWS ..> GetBlockingReasonsResponse : unnamed
    BlockAccountRequest ..> BlockingReasonDto : unnamed
    UnblockAccountRequest ..> BlockingReasonDto : unnamed
    GetBlockingReasonsResponse ..> BlockingReasonDto : unnamed
    AccountManagementWS ..> GetPossibleBlockingReasonsRequest : unnamed
    AccountManagementWS ..> GetPossibleBlockingReasonsResponse : unnamed
```
