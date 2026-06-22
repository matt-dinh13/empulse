# CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG
- **Diagram ID**: 144813
- **Elements**: 10
- **Connectors**: 2

```mermaid
graph TD
    Allowed_combinations_of_business_event_types_and_attribute_t["Allowed combinations of business event types and attribute types "]
    Business_events_Business_events_provided_interface["Business events : Business events - provided interface"]
    Business_Event_Attribute_Type["Business Event Attribute Type"]
    MOD_Business_Event_Type["{MOD}Business Event Type"]
    CardOperationFailedReasonTypeDto["CardOperationFailedReasonTypeDto"]
    CardOperationFailedReasonType["CardOperationFailedReasonType"]
    Messages_Business_events_Messages["Messages : Business events - Messages"]
    Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    Use_case_model_Create_business_event_on_external_request["Use case model : Create business event on external request"]
    REQ_1_Modify_existing_business_events_and_create_new_ones["REQ #1 - Modify existing business events and create new ones"]
    CardOperationFailedReasonType -->|unnamed| CardOperationFailedReasonTypeDto
    Business_Event_Attribute_Type -->|unnamed| Allowed_combinations_of_business_event_types_and_attribute_t
```
