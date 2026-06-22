# actualInstallment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Actual installment/v1
- **Diagram ID**: 159578
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Get_actual_installment_for_contract["Get actual installment for contract"]
    class getActualInstallmentResponse["getActualInstallmentResponse"]
    class getActualInstallmentRequest["getActualInstallmentRequest"]
    class actualInstallment["actualInstallment"]
    actualInstallment ..> Get_actual_installment_for_contract : unnamed
    actualInstallment ..> getActualInstallmentRequest : unnamed
    actualInstallment ..> getActualInstallmentResponse : unnamed
```
