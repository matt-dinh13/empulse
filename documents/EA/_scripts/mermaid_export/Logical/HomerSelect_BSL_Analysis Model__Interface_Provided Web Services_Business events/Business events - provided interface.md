# Business events - provided interface

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events
- **Diagram ID**: 74002
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class CardOperationFailedReasonDto["CardOperationFailedReasonDto"]
    class SimpleBusinessEventAttributeDto["SimpleBusinessEventAttributeDto"]
    class Use_case_model_Create_business_event_on_external_request["Use case model : Create business event on external request"]
    class BusinessEventResultTypeDto["BusinessEventResultTypeDto"]
    class BusinessEventAttributeDto["BusinessEventAttributeDto"]
    class CreateBusinessEventResponse["CreateBusinessEventResponse"]
    class Messages_Business_events_Messages["Messages : Business events - Messages"]
    class CreateBusinessEventRequest["CreateBusinessEventRequest"]
    class n_01_350_Create_business_event_on_external_request["01.350 Create business event on external request"]
    class ContractBusinessEventWS["ContractBusinessEventWS"]
    ContractBusinessEventWS ..> n_01_350_Create_business_event_on_external_request : unnamed
    Use_case_model_Create_business_event_on_external_request --> n_01_350_Create_business_event_on_external_request : unnamed
    ContractBusinessEventWS ..> CreateBusinessEventRequest : unnamed
    Messages_Business_events_Messages --> CreateBusinessEventRequest : unnamed
    Messages_Business_events_Messages --> CreateBusinessEventResponse : unnamed
    ContractBusinessEventWS ..> CreateBusinessEventResponse : unnamed
    BusinessEventAttributeDto <|-- SimpleBusinessEventAttributeDto : unnamed
    BusinessEventAttributeDto <|-- CardOperationFailedReasonDto : unnamed
    CreateBusinessEventRequest ..> BusinessEventAttributeDto : unnamed
    CreateBusinessEventResponse ..> BusinessEventResultTypeDto : unnamed
```
