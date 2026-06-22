# Job parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Logical Data Model
- **Diagram ID**: 160186
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractStatusType["ContractStatusType"]
    class ContractTrans["ContractTrans"]
    class Contract["Contract"]
    unnamed --> Contract : unnamed
    Contract o-- ContractTrans : unnamed
    Contract ..> ContractStatusType : unnamed
```
