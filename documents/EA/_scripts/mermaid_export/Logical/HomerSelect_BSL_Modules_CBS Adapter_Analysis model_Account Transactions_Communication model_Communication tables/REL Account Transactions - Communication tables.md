# REL Account Transactions - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/Communication tables
- **Diagram ID**: 97458
- **Elements**: 11
- **Connectors**: 7

```mermaid
classDiagram
    class DEL_TRANSHEAD160_SourceType["{DEL}TRANSHEAD160 SourceType"]
    class REL_Allocation_Type["REL Allocation Type"]
    class TRANSACHEAD160TypeInform["TRANSACHEAD160TypeInform"]
    class TRANSAC161_ReconciliationType["TRANSAC161 ReconciliationType"]
    class RecordTypeInform["RecordTypeInform"]
    class TRANSHEAD160_TransactionDirection["TRANSHEAD160 TransactionDirection"]
    class TRANSHEAD160_OperationReasonType["TRANSHEAD160 OperationReasonType"]
    class TRANSAC161["TRANSAC161"]
    class CommResult["CommResult"]
    class Legend["Legend"]
    class TRANSACHEAD160["TRANSACHEAD160"]
    TRANSACHEAD160 ..> TRANSACHEAD160TypeInform : unnamed
    TRANSACHEAD160 ..> REL_Allocation_Type : unnamed
    TRANSACHEAD160 ..> TRANSHEAD160_OperationReasonType : unnamed
    TRANSACHEAD160 ..> TRANSHEAD160_TransactionDirection : unnamed
    TRANSACHEAD160 ..> CommResult : unnamed
    TRANSAC161 ..> RecordTypeInform : unnamed
    TRANSAC161 ..> TRANSAC161_ReconciliationType : unnamed
```
