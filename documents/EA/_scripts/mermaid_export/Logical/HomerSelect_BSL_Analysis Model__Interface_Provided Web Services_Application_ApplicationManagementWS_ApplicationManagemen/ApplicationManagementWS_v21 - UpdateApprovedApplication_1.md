# ApplicationManagementWS_v21 - UpdateApprovedApplication

```mermaid
classDiagram
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
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    RelationshipAttribute --> KeyValueType : unnamed
    ExtendedProperties --> ExtendedProperty : unnamed
    ApprovedApplication --> ExtendedProperty : {DEL LOR-6613/}
    RelationshipAttributes --> RelationshipAttribute : unnamed
    Relationship --> RelationshipAttributes : unnamed
    Relationships --> Relationship : unnamed
    ApprovedApplication --> Relationships : unnamed
    Relationship --> Party : unnamed
    UpdateApprovedApplicationRequest --> ApprovedApplication : unnamed
    ApprovedApplication --> ExtendedProperties : unnamed
    ExtendedInformation --> KeyValueType : unnamed
    ApplicationManagementWS_v21 --> UpdateApprovedApplicationRequest : unnamed
    ExtendedProperty --> KeyValueType : unnamed
    ApplicationManagementWS_v21 --> n_01_312_Update_approved_application : unnamed
    ApprovedApplication --> ExtendedInformation : unnamed
    ValidationError --> MessageAttribute : unnamed
    UpdateApprovedApplicationFault --> ValidationError : unnamed
    UpdateApprovedApplicationFault --> UpdateApprovedApplicationResultCode : unnamed
    ApplicationManagementWS_v21 --> UpdateApprovedApplicationFault : unnamed
    ApplicationManagementWS_v21 --> UpdateApprovedApplicationResponse : unnamed
    MessageAttribute --> KeyValueType : unnamed
```
