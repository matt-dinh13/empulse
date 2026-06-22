# activateFee_v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Activate fee/v1
- **Diagram ID**: 160987
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class External_Reference["External Reference"]
    class n_03_031_Regenerate_installment_schedule_after_fee_activatio["03.031 Regenerate installment schedule after fee activation"]
    class activateFeeResponse["activateFeeResponse"]
    class activateFeeRequest["activateFeeRequest"]
    class activateFee["activateFee"]
    activateFee ..> activateFeeRequest : unnamed
    activateFee ..> activateFeeResponse : unnamed
    activateFee ..> n_03_031_Regenerate_installment_schedule_after_fee_activatio : unnamed
    activateFee ..> External_Reference : External Reference
```
