# DirectDebitService.suspendDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/suspendDDM
- **Diagram ID**: 112789
- **Elements**: 5
- **Connectors**: 5

```mermaid
classDiagram
    class SuspendDDMResultTypeDto["SuspendDDMResultTypeDto"]
    class SuspendDDMResponse["SuspendDDMResponse"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class SuspendDDMForContractRequest["SuspendDDMForContractRequest"]
    class DirectDebitService["DirectDebitService"]
    SuspendDDMForContractRequest ..> ContractDDMBaseDto : unnamed
    SuspendDDMResponse ..> ContractDDMBaseDto : unnamed
    SuspendDDMResponse ..> SuspendDDMResultTypeDto : unnamed
    DirectDebitService ..> SuspendDDMForContractRequest : unnamed
    DirectDebitService ..> SuspendDDMResponse : unnamed
```
