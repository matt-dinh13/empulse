# ApplicationManagementWS_v23 - UpdateApprovedApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153288
- **Elements**: 20
- **Connectors**: 22

```mermaid
classDiagram
    class PaymentChannels["PaymentChannels"]
    class Document["Document"]
    class ExtendedProperties["ExtendedProperties"]
    class ExtendedProperty["ExtendedProperty"]
    class RelationshipAttribute["RelationshipAttribute"]
    class RelationshipAttributes["RelationshipAttributes"]
    class Relationship["Relationship"]
    class Relationships["Relationships"]
    class Party["Party"]
    class ApprovedApplication["ApprovedApplication"]
    class KeyValueType["KeyValueType"]
    class n_01_312_Update_approved_application["01.312 Update approved application"]
    class ExtendedInformation["ExtendedInformation"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class UpdateApprovedApplicationResultCode["UpdateApprovedApplicationResultCode"]
    class UpdateApprovedApplicationFault["UpdateApprovedApplicationFault"]
    class UpdateApprovedApplicationResponse["UpdateApprovedApplicationResponse"]
    class UpdateApprovedApplicationRequest["UpdateApprovedApplicationRequest"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    KeyValueType <|-- ExtendedProperty : unnamed
    ApprovedApplication ..> Document : unnamed
    ApprovedApplication ..> ExtendedProperties : unnamed
    ExtendedProperties ..> ExtendedProperty : unnamed
    RelationshipAttributes ..> RelationshipAttribute : unnamed
    Relationship ..> RelationshipAttributes : unnamed
    Relationships ..> Relationship : unnamed
    ApprovedApplication ..> Relationships : unnamed
    Relationship ..> Party : unnamed
    ApprovedApplication ..> PaymentChannels : {ADD LOR-5647/}
    KeyValueType <|-- ExtendedInformation : unnamed
    ApplicationManagementWS_v23 ..> UpdateApprovedApplicationRequest : unnamed
    KeyValueType <|-- RelationshipAttribute : unnamed
    KeyValueType <|-- MessageAttribute : unnamed
    n_01_312_Update_approved_application <|.. ApplicationManagementWS_v23 : unnamed
    ApprovedApplication ..> ExtendedInformation : unnamed
    ValidationError ..> MessageAttribute : unnamed
    UpdateApprovedApplicationFault ..> ValidationError : unnamed
    UpdateApprovedApplicationFault ..> UpdateApprovedApplicationResultCode : unnamed
    ApplicationManagementWS_v23 ..> UpdateApprovedApplicationFault : unnamed
    ApplicationManagementWS_v23 ..> UpdateApprovedApplicationResponse : unnamed
    UpdateApprovedApplicationRequest ..> ApprovedApplication : unnamed
```
