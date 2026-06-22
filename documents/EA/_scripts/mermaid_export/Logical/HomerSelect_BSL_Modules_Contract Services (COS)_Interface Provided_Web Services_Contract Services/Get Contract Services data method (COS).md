# Get Contract Services data method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159910
- **Elements**: 8
- **Connectors**: 17

```mermaid
classDiagram
    class ADD_08_080_Get_Contract_Services_by_Contract["{ADD}08.080 Get Contract Services by Contract"]
    class ADD_ContractServices["{ADD}ContractServices"]
    class ADD_FindContractServices["{ADD}FindContractServices"]
    class Service["Service"]
    class n_08_070_Get_Contract_Service_detail["08.070 Get Contract Service detail"]
    class GetContractService["GetContractService"]
    class ContractServices["ContractServices"]
    class ContractService["ContractService"]
    ContractServices --> ContractService : unnamed
    ContractServices ..> n_08_070_Get_Contract_Service_detail : unnamed
    ContractServices --> GetContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractService --> Service : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices ..> ADD_08_080_Get_Contract_Services_by_Contract : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ADD_ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ADD_FindContractServices : unnamed
    ContractServices --> ADD_ContractServices : unnamed
    ContractServices --> ContractService : unnamed
```
