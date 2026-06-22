# Card operation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Management
- **Diagram ID**: 163837
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MOD_Applications["{MOD}Applications"]
    class n_01_385_Assign_card_to_application_externally["01.385 Assign card to application externally"]
    class Card["Card"]
    class Card["Card"]
    class Application["Application"]
    class BSL["BSL"]
    BSL o-- MOD_Applications : /v1/applications
    Application o-- Card : /card
    Card ..> Card : unnamed
    Card ..> n_01_385_Assign_card_to_application_externally : unnamed
    MOD_Applications o-- Application : /{code}
```
