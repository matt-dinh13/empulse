# CEL Payment Pairing - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/Communication tables
- **Diagram ID**: 97454
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class RecordTypeInform["RecordTypeInform"]
    class Legend["Legend"]
    class CommResult["CommResult"]
    class INSTALPAY124["INSTALPAY124"]
    INSTALPAY124 ..> CommResult : unnamed
    INSTALPAY124 ..> RecordTypeInform : unnamed
```
