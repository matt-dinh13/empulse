# ContractServices - Cancel ContractService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services/v3
- **Diagram ID**: 153260
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class CancelContractServiceRequest["CancelContractServiceRequest"]
    class Contract_Service_Services["Contract Service Services"]
    class n_08_495_Cancel_Contract_Service_externally["08.495 Cancel Contract Service externally"]
    Contract_Service_Services --> CancelContractServiceRequest : unnamed
    Contract_Service_Services ..> n_08_495_Cancel_Contract_Service_externally : unnamed
```
