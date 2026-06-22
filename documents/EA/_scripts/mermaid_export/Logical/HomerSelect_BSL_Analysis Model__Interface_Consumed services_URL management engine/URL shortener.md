# URL shortener

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/URL management engine
- **Diagram ID**: 129680
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Response["Response"]
    class Request["Request"]
    class Datapoint["Datapoint"]
    class URL_management_engine["URL management engine"]
    URL_management_engine o-- Datapoint : /datapoints
    Datapoint --> Request : unnamed
    Datapoint --> Response : unnamed
```
