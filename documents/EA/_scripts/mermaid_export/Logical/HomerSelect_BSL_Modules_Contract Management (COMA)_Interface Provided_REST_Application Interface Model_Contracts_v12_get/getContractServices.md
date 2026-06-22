# getContractServices

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractServices
- **Diagram ID**: 160415
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_ServiceDefinition["{ADD}ServiceDefinition"]
    class ADD_Get_contract_services["{ADD}Get contract services"]
    class ContractService["ContractService"]
    Contract ..> ContractService : Response
    Contract ..> ContractRequestPathParam : Request path parameter(s)
    Contract ..> ADD_Get_contract_services : unnamed
    ContractService --> ADD_ServiceDefinition : unnamed
```
