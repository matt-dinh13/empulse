# UpdateApproved

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Management
- **Diagram ID**: 163839
- **Elements**: 10
- **Connectors**: 11

```mermaid
classDiagram
    class MOD_Applications["{MOD}Applications"]
    class Party["Party"]
    class Relationship["Relationship"]
    class Relationships["Relationships"]
    class KeyValue["KeyValue"]
    class n_01_312_Update_approved_application["01.312 Update approved application"]
    class ApprovedApplication["ApprovedApplication"]
    class UpdateApproved["UpdateApproved"]
    class Application["Application"]
    class BSL["BSL"]
    BSL o-- MOD_Applications : /v1/applications
    Application o-- UpdateApproved : /updateApproved
    UpdateApproved ..> ApprovedApplication : unnamed
    n_01_312_Update_approved_application <|.. UpdateApproved : unnamed
    Relationship --> KeyValue : unnamed
    ApprovedApplication ..> KeyValue : unnamed
    ApprovedApplication ..> KeyValue : unnamed
    ApprovedApplication ..> Relationships : unnamed
    Relationships --> Relationship : unnamed
    Relationship --> Party : unnamed
    MOD_Applications o-- Application : /{code}
```
