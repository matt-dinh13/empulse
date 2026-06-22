# activateFee_v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Activate fee/v2
- **Diagram ID**: 161016
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_03_031_Regenerate_installment_schedule_after_fee_activatio["03.031 Regenerate installment schedule after fee activation"]
    class activateFeeResponse["activateFeeResponse"]
    class activateFeeRequest["activateFeeRequest"]
    class activateFee["activateFee"]
    activateFee ..> n_03_031_Regenerate_installment_schedule_after_fee_activatio : unnamed
    activateFee ..> activateFeeResponse : unnamed
    activateFee ..> activateFeeRequest : unnamed
```
