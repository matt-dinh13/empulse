# Consumed JMS messages - ApprovalProcessResultService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Contract/Contract approval
- **Diagram ID**: 64378
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class DataType["DataType"]
    class Pair["Pair"]
    class MOD_ApprovalProcessFailure["{MOD}ApprovalProcessFailure"]
    class ApprovalProcessResult["ApprovalProcessResult"]
    ApprovalProcessResult ..> Pair : unnamed
    Pair ..> DataType : unnamed
```
