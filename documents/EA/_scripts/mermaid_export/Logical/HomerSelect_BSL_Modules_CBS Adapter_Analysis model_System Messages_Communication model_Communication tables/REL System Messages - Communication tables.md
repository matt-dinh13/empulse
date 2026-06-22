# REL System Messages - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/Communication tables
- **Diagram ID**: 54353
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class CommResult["CommResult"]
    class EVENT189_EventType["EVENT189 EventType"]
    class EVENT289_EventType["EVENT289 EventType"]
    class Legend["Legend"]
    class EVENT289["EVENT289"]
    class EVENT189["EVENT189"]
    EVENT189 ..> EVENT189_EventType : unnamed
    EVENT289 ..> EVENT289_EventType : unnamed
    EVENT189 ..> CommResult : unnamed
    EVENT289 ..> CommResult : unnamed
```
