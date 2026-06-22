# CardBlockWS.GetAllowedCardBlockOperationsForUser

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS
- **Diagram ID**: 100766
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class CardBlockWS["CardBlockWS"]
    class UserPrivilegeToBlockUnblockCardWithReasonDto["UserPrivilegeToBlockUnblockCardWithReasonDto"]
    class GetAllowedCardBlockOperationsForUserResponse["GetAllowedCardBlockOperationsForUserResponse"]
    class GetAllowedCardBlockOperationsForUserRequest["GetAllowedCardBlockOperationsForUserRequest"]
    CardBlockWS ..> GetAllowedCardBlockOperationsForUserRequest : unnamed
    CardBlockWS ..> GetAllowedCardBlockOperationsForUserResponse : unnamed
    GetAllowedCardBlockOperationsForUserResponse ..> UserPrivilegeToBlockUnblockCardWithReasonDto : unnamed
    GetAllowedCardBlockOperationsForUserResponse ..> UserPrivilegeToBlockUnblockCardWithReasonDto : unnamed
```
