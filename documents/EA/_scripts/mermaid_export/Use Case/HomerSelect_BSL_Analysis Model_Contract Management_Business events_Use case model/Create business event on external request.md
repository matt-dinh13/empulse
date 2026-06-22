# Create business event on external request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Business events/Use case model
- **Diagram ID**: 159738
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph LR
    Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    Business_events_Business_events_provided_interface["Business events : Business events - provided interface"]
    Create_business_event["Create business event"]
    n_01_350_Create_business_event_on_external_request(("01.350 Create business event on external request"))
    CaBus_AM[/"CaBus-AM"/]
    BSL["BSL"]
    n_01_350_Create_business_event_on_external_request -->|unnamed| Create_business_event
    n_01_350_Create_business_event_on_external_request -->|unnamed| Business_events_Business_events_provided_interface
    CaBus_AM --- n_01_350_Create_business_event_on_external_request
```
