# Application relationship

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Application
- **Diagram ID**: 163841
- **Elements**: 12
- **Connectors**: 13

```mermaid
classDiagram
    class MOD_Applications["{MOD}Applications"]
    class Application["Application"]
    class BSL["BSL"]
    class Get_relationship["Get relationship"]
    class Delete_relationship["Delete relationship"]
    class Create_Or_Update_relationship["Create Or Update relationship "]
    class Get_relationships["Get relationships"]
    class Relationships["Relationships"]
    class Party["Party"]
    class Relationship["Relationship"]
    class Relationship["Relationship"]
    class Relationships["Relationships"]
    Relationships o-- Relationship : /{type}
    Relationship --> Relationship : unnamed
    Relationships --> Relationship : unnamed
    Relationships --> Relationship : unnamed
    Relationship --> Party : unnamed
    Relationships --> Relationships : unnamed
    Relationships ..> Get_relationships : unnamed
    Relationships ..> Create_Or_Update_relationship : unnamed
    Relationship ..> Delete_relationship : unnamed
    Relationship ..> Get_relationship : unnamed
    BSL o-- MOD_Applications : /v1/applications
    Application o-- Relationships : /relationships
    MOD_Applications o-- Application : /{code}
```
