# DirectDebitService.resumeDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/resumeDDM
- **Diagram ID**: 112788
- **Elements**: 5
- **Connectors**: 5

```mermaid
classDiagram
    class ResumeDDMResultTypeDto["ResumeDDMResultTypeDto"]
    class ResumeDDMResponse["ResumeDDMResponse"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class ResumeDDMForContractRequest["ResumeDDMForContractRequest"]
    class DirectDebitService["DirectDebitService"]
    ResumeDDMForContractRequest ..> ContractDDMBaseDto : unnamed
    ResumeDDMResponse ..> ContractDDMBaseDto : unnamed
    ResumeDDMResponse ..> ResumeDDMResultTypeDto : unnamed
    DirectDebitService ..> ResumeDDMResponse : unnamed
    DirectDebitService ..> ResumeDDMForContractRequest : unnamed
```
