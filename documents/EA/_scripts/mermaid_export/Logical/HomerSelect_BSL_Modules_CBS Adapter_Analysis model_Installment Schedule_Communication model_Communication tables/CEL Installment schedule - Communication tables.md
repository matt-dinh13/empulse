# CEL Installment schedule - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model/Communication tables
- **Diagram ID**: 75328
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class CommResult["CommResult"]
    class RecordTypeInform["RecordTypeInform"]
    class INSTALMENT120_TypeInstalment["INSTALMENT120 TypeInstalment"]
    class INSTALMENT120_RecalculationReason["INSTALMENT120 RecalculationReason"]
    class INSTALMENT120_InstalmentHeaderType["INSTALMENT120 InstalmentHeaderType "]
    class Legend["Legend"]
    class INSTALMENT120["INSTALMENT120"]
    INSTALMENT120 ..> INSTALMENT120_TypeInstalment : unnamed
    INSTALMENT120 ..> RecordTypeInform : unnamed
    INSTALMENT120 ..> INSTALMENT120_RecalculationReason : unnamed
    INSTALMENT120 ..> INSTALMENT120_InstalmentHeaderType : unnamed
    INSTALMENT120 ..> CommResult : use
```
