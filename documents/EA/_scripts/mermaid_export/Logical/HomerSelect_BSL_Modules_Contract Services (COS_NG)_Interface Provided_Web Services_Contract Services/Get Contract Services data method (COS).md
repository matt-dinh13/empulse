# Get Contract Services data method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 163479
- **Elements**: 8
- **Connectors**: 15

```mermaid
classDiagram
    class n_08_080_Get_Contract_Services_by_Contract["08.080 Get Contract Services by Contract"]
    class ADD_ContractServices["{ADD}ContractServices"]
    class FindContractServices["FindContractServices"]
    class Service["Service"]
    class n_08_070_Get_Contract_Service_detail["08.070 Get Contract Service detail"]
    class GetContractService["GetContractService"]
    class ContractServices["ContractServices"]
    class ContractService["ContractService"]
    ADD_ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> GetContractService : unnamed
    ContractServices ..> n_08_070_Get_Contract_Service_detail : unnamed
    ContractService --> Service : unnamed
    ContractServices --> FindContractServices : unnamed
    ContractServices --> ADD_ContractServices : unnamed
    ContractServices ..> n_08_080_Get_Contract_Services_by_Contract : unnamed
```
