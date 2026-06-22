# ContractOperationWS - RegisterContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS
- **Diagram ID**: 146652
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class RegisterContractFaultType["RegisterContractFaultType"]
    class RegisterContractResponse["RegisterContractResponse"]
    class RegisterContractRequest["RegisterContractRequest"]
    class RegisterContractFault["RegisterContractFault"]
    class ContractOperationsWS["ContractOperationsWS"]
    class n_01_271_Register_contract_remotely["01.271 Register contract remotely"]
    ContractOperationsWS --> n_01_271_Register_contract_remotely : unnamed
    ContractOperationsWS ..> RegisterContractFault : unnamed
    ContractOperationsWS ..> RegisterContractRequest : unnamed
    ContractOperationsWS ..> RegisterContractResponse : unnamed
    RegisterContractFault ..> RegisterContractFaultType : unnamed
```
