# Common Rest

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Common Rest
- **Diagram ID**: 158546
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Search["Search"]
    class MOD_Applications["{MOD}Applications"]
    class Application["Application"]
    class BSL["BSL"]
    MOD_Applications o-- Application : /{code}
    BSL o-- MOD_Applications : /v1/applications
    MOD_Applications o-- Search : /search
```
