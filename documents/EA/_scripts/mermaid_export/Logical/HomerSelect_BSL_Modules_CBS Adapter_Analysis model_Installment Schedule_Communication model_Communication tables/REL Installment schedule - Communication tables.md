# REL Installment schedule - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model/Communication tables
- **Diagram ID**: 75329
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class REL_Allocation_Type["REL Allocation Type"]
    class RecordTypeInform["RecordTypeInform"]
    class INSTALMENT125_ReconciliationType["INSTALMENT125 ReconciliationType"]
    class INSTALMENT125_TypeInstalHead["INSTALMENT125 TypeInstalHead"]
    class Legend["Legend"]
    class INSTALMENT125["INSTALMENT125"]
    INSTALMENT125 ..> INSTALMENT125_ReconciliationType : unnamed
    INSTALMENT125 ..> REL_Allocation_Type : unnamed
    INSTALMENT125 ..> RecordTypeInform : unnamed
    INSTALMENT125 ..> INSTALMENT125_TypeInstalHead : unnamed
```
