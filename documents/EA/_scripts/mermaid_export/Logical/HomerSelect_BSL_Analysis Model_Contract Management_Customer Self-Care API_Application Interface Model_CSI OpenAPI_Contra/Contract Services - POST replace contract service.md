# Contract Services - POST replace contract service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services
- **Diagram ID**: 153263
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_01_782_Replace_Contract_Service["01.782 Replace Contract Service"]
    class ReplaceContractServiceResponse["ReplaceContractServiceResponse"]
    class ReplaceContractServiceRequest["ReplaceContractServiceRequest"]
    class Contract_Service_Services["Contract Service Services"]
    class services["services"]
    Contract_Service_Services ..> ReplaceContractServiceRequest : unnamed
    Contract_Service_Services ..> ReplaceContractServiceResponse : unnamed
    Contract_Service_Services ..> n_01_782_Replace_Contract_Service : unnamed
    services o-- Contract_Service_Services : unnamed
```
