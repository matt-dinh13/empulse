# Business events - Messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages
- **Diagram ID**: 124047
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    class CardOperationFailedReasonTypeDto["CardOperationFailedReasonTypeDto"]
    class Use_case_model_Create_business_event_on_external_request["Use case model : Create business event on external request"]
    class Business_events_Business_events_provided_interface["Business events : Business events - provided interface"]
    class SimpleBusinessEventAttributeTypeDto["SimpleBusinessEventAttributeTypeDto"]
    class SimpleBusinessEventAttributeDto["SimpleBusinessEventAttributeDto"]
    class CardOperationFailedReasonDto["CardOperationFailedReasonDto"]
    class BusinessEventAttributeDto["BusinessEventAttributeDto"]
    class BusinessEventResultTypeDto["BusinessEventResultTypeDto"]
    class BusinessEventTypeDto["BusinessEventTypeDto"]
    class CreateBusinessEventResponse["CreateBusinessEventResponse"]
    class CreateBusinessEventRequest["CreateBusinessEventRequest"]
    CreateBusinessEventRequest ..> BusinessEventTypeDto : unnamed
    CreateBusinessEventResponse ..> BusinessEventResultTypeDto : unnamed
    CreateBusinessEventRequest ..> BusinessEventAttributeDto : unnamed
    CreateBusinessEventResponse --> Business_events_Business_events_provided_interface : unnamed
    CreateBusinessEventRequest --> Business_events_Business_events_provided_interface : unnamed
    BusinessEventAttributeDto <|-- SimpleBusinessEventAttributeDto : unnamed
    SimpleBusinessEventAttributeDto ..> SimpleBusinessEventAttributeTypeDto : unnamed
    CardOperationFailedReasonDto ..> CardOperationFailedReasonTypeDto : unnamed
    BusinessEventAttributeDto <|-- CardOperationFailedReasonDto : unnamed
```
