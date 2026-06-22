# PER Result

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Logical Data Model
- **Diagram ID**: 163970
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class PER_Fee_Included_In_Operation_Item["PER Fee Included In Operation Item"]
    class PER_Fee_Item["PER Fee Item"]
    class PER_Result["PER Result"]
    PER_Result o-- PER_Fee_Included_In_Operation_Item : unnamed
    PER_Result o-- PER_Fee_Item : unnamed
```
