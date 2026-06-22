# pay.repayment-data.v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/PAYM messages/v1.0/pay.repayment-data.v1
- **Diagram ID**: 141342
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class TransactionDate["TransactionDate"]
    class PairedContractNumber["PairedContractNumber"]
    class ProvidedContractNumber["ProvidedContractNumber"]
    class pay_repayment_data_v1["pay.repayment-data.v1"]
    pay_repayment_data_v1 ..> TransactionDate : unnamed
    pay_repayment_data_v1 ..> PairedContractNumber : unnamed
    pay_repayment_data_v1 ..> ProvidedContractNumber : unnamed
```
