# CEL Account Transactions - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/Communication tables
- **Diagram ID**: 97457
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class TRANSAC150["TRANSAC150"]
    class ACCOPER156["ACCOPER156"]
    class ACCOPER156_CancelFlagType["ACCOPER156 CancelFlagType"]
    class ACCOPER156_OperationType["ACCOPER156 OperationType"]
    class CommResult["CommResult"]
    class TRANSAC150_TransactionType["TRANSAC150 TransactionType"]
    class Legend["Legend"]
    TRANSAC150 ..> CommResult : unnamed
    TRANSAC150 ..> TRANSAC150_TransactionType : unnamed
    ACCOPER156 ..> ACCOPER156_OperationType : unnamed
    ACCOPER156 ..> ACCOPER156_CancelFlagType : unnamed
    ACCOPER156 ..> CommResult : unnamed
```
