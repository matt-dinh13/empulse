# Management info

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Management
- **Diagram ID**: 138910
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Commit["Commit"]
    class Git["Git"]
    class App["App"]
    class SimpleAppInfo["SimpleAppInfo"]
    class info["info"]
    class management["management"]
    management ..> info : /info
    info ..> SimpleAppInfo : unnamed
    SimpleAppInfo ..> App : unnamed
    SimpleAppInfo ..> Git : unnamed
    Git ..> Commit : unnamed
```
