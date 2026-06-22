# ContractPayoffProcessingResult

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Rabbit/v1.0/ContractPayoffProcessingResult
- **Diagram ID**: 160209
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Resul["Resul"]
    class ContractPayoffProcessingResult["ContractPayoffProcessingResult"]
    class PayoffResultItem["PayoffResultItem"]
    ContractPayoffProcessingResult ..> PayoffResultItem : unnamed
    PayoffResultItem ..> Resul : unnamed
```
