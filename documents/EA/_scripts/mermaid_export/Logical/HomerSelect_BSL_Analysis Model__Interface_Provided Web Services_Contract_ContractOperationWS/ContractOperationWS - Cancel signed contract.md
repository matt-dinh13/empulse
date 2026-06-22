# ContractOperationWS - Cancel signed contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS
- **Diagram ID**: 146651
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class CancellationReasonType["CancellationReasonType"]
    class CancelContractFaultType["CancelContractFaultType"]
    class n_01_332_Cancel_signed_contract_service["01.332 Cancel signed contract service"]
    class CancelSignedContractFault["CancelSignedContractFault"]
    class CancelSignedContractResponse["CancelSignedContractResponse"]
    class CancelSignedContractRequest["CancelSignedContractRequest"]
    class ContractOperationsWS["ContractOperationsWS"]
    ContractOperationsWS ..> CancelSignedContractRequest : unnamed
    ContractOperationsWS ..> CancelSignedContractResponse : unnamed
    ContractOperationsWS ..> CancelSignedContractFault : unnamed
    ContractOperationsWS ..> n_01_332_Cancel_signed_contract_service : unnamed
    CancelSignedContractFault ..> CancelContractFaultType : unnamed
    CancelSignedContractRequest ..> CancellationReasonType : unnamed
```
