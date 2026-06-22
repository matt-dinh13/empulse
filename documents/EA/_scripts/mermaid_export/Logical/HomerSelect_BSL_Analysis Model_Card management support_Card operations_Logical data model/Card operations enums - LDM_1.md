# Card operations enums - LDM

```mermaid
classDiagram
    class ReplaceCardResultCode["ReplaceCardResultCode"]
    class ReplaceCardResultCodeDto["ReplaceCardResultCodeDto"]
    class ActivateCardResultCodeDto["ActivateCardResultCodeDto"]
    class ActivateCardResultCode["ActivateCardResultCode"]
    class HardCheckTypeDto["HardCheckTypeDto"]
    class HardCheckType["HardCheckType"]
    class Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    class Messages_Business_events_Messages["Messages : Business events - Messages"]
    class Business_events_Business_events_provided_interface["Business events : Business events - provided interface"]
    class CardOperationFailedReasonTypeDto["CardOperationFailedReasonTypeDto"]
    class CardOperationFailedReasonType["CardOperationFailedReasonType"]
    Logical_data_model_Business_event_Logical_data_model --> CardOperationFailedReasonType : unnamed
    CardOperationFailedReasonType --> CardOperationFailedReasonTypeDto : unnamed
    CardOperationFailedReasonTypeDto --> Business_events_Business_events_provided_interface : unnamed
    CardOperationFailedReasonTypeDto --> Messages_Business_events_Messages : unnamed
    HardCheckType --> HardCheckTypeDto : unnamed
    ActivateCardResultCode --> ActivateCardResultCodeDto : unnamed
    ReplaceCardResultCode --> ReplaceCardResultCodeDto : unnamed
```
