# ContractServices - Terminate ContractService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services/v3
- **Diagram ID**: 153259
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class TerminateContractServiceRequest["TerminateContractServiceRequest"]
    class Contract_Service_Services["Contract Service Services"]
    class n_08_490_Terminate_Contract_Service_externally["08.490 Terminate Contract Service externally"]
    Contract_Service_Services ..> n_08_490_Terminate_Contract_Service_externally : unnamed
    Contract_Service_Services --> TerminateContractServiceRequest : unnamed
```
