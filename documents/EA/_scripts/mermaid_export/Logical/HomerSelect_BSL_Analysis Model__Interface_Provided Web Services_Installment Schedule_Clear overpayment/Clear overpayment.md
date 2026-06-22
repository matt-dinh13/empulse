# Clear overpayment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Clear overpayment
- **Diagram ID**: 149671
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ResultCode["ResultCode"]
    class cancelOverpaymentResponse["cancelOverpaymentResponse"]
    class refundType["refundType"]
    class cancelOverpaymentRequest["cancelOverpaymentRequest"]
    class clearOverpayment["clearOverpayment"]
    class n_05_222_Clear_overpayment["05.222 Clear overpayment"]
    clearOverpayment ..> n_05_222_Clear_overpayment : unnamed
    clearOverpayment --> cancelOverpaymentRequest : unnamed
    cancelOverpaymentRequest ..> refundType : unnamed
    clearOverpayment ..> cancelOverpaymentResponse : unnamed
    cancelOverpaymentResponse ..> ResultCode : unnamed
```
