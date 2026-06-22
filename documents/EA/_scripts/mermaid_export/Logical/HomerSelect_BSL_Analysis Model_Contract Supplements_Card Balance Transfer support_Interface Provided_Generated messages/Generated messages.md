# Generated messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Interface Provided/Generated messages
- **Diagram ID**: 157636
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class RequestSourceIdDto["RequestSourceIdDto"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class RelatedSubject["RelatedSubject"]
    class CustomData["CustomData"]
    class SupplementData["SupplementData"]
    class SupplementNotification["SupplementNotification"]
    class SupplementDocument["SupplementDocument"]
    SupplementData --> SupplementDocument : unnamed
    SupplementData --> RequestSourceIdDto : unnamed
    SupplementData --> RelatedSubject : unnamed
    SupplementData --> CustomData : unnamed
    SupplementData --> ContractSupplementStatusTransition : unnamed
    SupplementNotification --> SupplementData : unnamed
    unnamed --> RelatedSubject : unnamed
```
