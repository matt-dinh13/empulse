# Management

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Management
- **Diagram ID**: 138911
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Management_Management_info["Management : Management info"]
    class GET_info["GET info"]
    class info["info"]
    class management["management"]
    management ..> info : /info
    GET_info <|.. info : unnamed
```
