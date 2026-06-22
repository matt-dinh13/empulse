# Business event - Logical data model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Business events/Logical data model
- **Diagram ID**: 161138
- **Elements**: 12
- **Connectors**: 10

```mermaid
classDiagram
    class Salesroom["Salesroom"]
    class Business_events_Business_events_provided_interface["Business events : Business events - provided interface"]
    class Use_case_model_Create_business_event_on_external_request["Use case model : Create business event on external request"]
    class Logical_Data_Model_Contract_finishing_LDM["Logical Data Model : Contract finishing - LDM"]
    class Logical_data_model_Card_operations_enums_LDM["Logical data model : Card operations enums - LDM"]
    class Allowed_combinations_of_business_event_types_and_attribute_t["Allowed combinations of business event types and attribute types "]
    class BusinessEventAttributeDataType["BusinessEventAttributeDataType"]
    class Business_Event_Attribute_Type["Business Event Attribute Type"]
    class BusinessEventAttribute["BusinessEventAttribute"]
    class MOD_Business_Event_Type["{MOD}Business Event Type"]
    class Business_Event["Business Event"]
    class MOD_Contract["{MOD}Contract"]
    Business_Event o-- BusinessEventAttribute : unnamed
    Use_case_model_Create_business_event_on_external_request --> Business_Event : unnamed
    Business_Event ..> MOD_Business_Event_Type : unnamed
    BusinessEventAttribute ..> Business_Event_Attribute_Type : unnamed
    Business_Event_Attribute_Type ..> BusinessEventAttributeDataType : unnamed
    Business_Event_Attribute_Type ..> Allowed_combinations_of_business_event_types_and_attribute_t : unnamed
    Business_Event ..> Allowed_combinations_of_business_event_types_and_attribute_t : unnamed
    Business_Event_Attribute_Type --> Logical_data_model_Card_operations_enums_LDM : unnamed
    Business_Event_Attribute_Type --> Logical_Data_Model_Contract_finishing_LDM : unnamed
    MOD_Contract o-- Business_Event : unnamed
```
