# Application search

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Application
- **Diagram ID**: 163843
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MOD_Applications["{MOD}Applications"]
    class ApplicationEventType["ApplicationEventType"]
    class n_01_164_Search_for_application["01.164 Search for application"]
    class Search["Search"]
    class Application["Application"]
    class BSL["BSL"]
    BSL o-- MOD_Applications : /v1/applications
    Application o-- Search : /search
    n_01_164_Search_for_application <|.. Search : unnamed
    Search ..> ApplicationEventType : unnamed
    MOD_Applications o-- Application : /{code}
```
