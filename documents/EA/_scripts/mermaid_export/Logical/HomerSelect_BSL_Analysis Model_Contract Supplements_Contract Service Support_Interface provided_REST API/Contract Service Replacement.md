# Contract Service Replacement 

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Interface provided/REST API
- **Diagram ID**: 164698
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_13_600_Process_contract_service_replacement_request["{ADD}13.600 Process contract service replacement request"]
    class ContractServiceReplacementResponse["ContractServiceReplacementResponse"]
    class ConractServiceReplacementRequest["ConractServiceReplacementRequest"]
    class ContractServiceSupplement["ContractServiceSupplement"]
    ContractServiceSupplement --> ConractServiceReplacementRequest : unnamed
    ContractServiceSupplement --> ContractServiceReplacementResponse : unnamed
    ContractServiceSupplement ..> ADD_13_600_Process_contract_service_replacement_request : unnamed
```
